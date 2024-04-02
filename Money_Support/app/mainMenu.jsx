import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, BackHandler, Alert } from 'react-native';
import BankBalanceLable from '../components/Lables/bankBalance';
import HeadLine from '../components/Lables/headlins';
import colorPallet from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import InfoBox from '../components/fullComp/info';
import ExpendituresIncomComp from '../components/fullComp/expendituresIncom';
import ValueToString from '../Functions/valueToString';
import { DeleteCurrentUserKey, GetAllUserKeys, SaveCurrentUser, getData, storeData } from '../Functions/dataDealer';
import { AddToCurrentUserData, currentUserData, newEntry, setCurrentUserData, setToWelcomeData } from '../variables/dictionary';
import { currentuserKey, setCurrentUserKey } from '../variables/string';
import ExpendituresIncomListItem from '../components/fullComp/expendituresIncomistItem';
import languageDictionary from '../Functions/getLanguageDictionary';
import SetDateString from '../Functions/dateTransformer';
import { SortById } from '../Functions/dictionarySorting';
import AddEntryModal from '../components/Modals/addEntryModal';
import CahngeUserButton from '../components/fullComp/changeUserButton';
import ChangeUserModal from '../components/Modals/changeUserModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreateNewUserModal from '../components/Modals/createUserModal';
import CalculateExpendituresIcome from '../Functions/calcuateCurrentAndMonth';

const MainMenu = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [changeUserModal, setChangeUserModal] = useState(false)
  const [createNewUserModal, setCreateNewUserModal] = useState(false)
  const [allKeys, setAllKeys] = useState(null)
  const [currentUser, setCurrenUser] = useState(currentuserKey)
  const [currentExpenditures, setCurrentExpenditures] = useState(null)
  const [avargeExpenditures, setAvargeExpenditures] = useState(null)
  const [avargeIncome, setAvargeIncome] = useState(null)
  const [currentIncome, setCurrentIncome] = useState(null)

  // 1.1 Create function, to load all data
  const fetchData = async () => {
    console.log(``)
    console.log(`\nLoding data from User ${currentUser}`)
    try {
      await getData(currentUser).then(async (data) => {
        try {
          sorted = SortById(data)
        }
        catch {
          sorted = null
        }
        await AsyncStorage.getAllKeys().then((data) => {
          data = data == undefined ? [`[ERROR] no user found`]: data.filter(item => item != "settings" && item != "currentUser")
          setAllKeys(data)
          console.log(`got ${data.length} userKeys: ${data}`)
        })

        setCurrentUserData(sorted)
        setData(sorted)

        await CalculateExpendituresIcome().then((d) => {
          setCurrentExpenditures(d[0])
          setAvargeExpenditures(d[1])
          console.log(`loaded expenditures: current: ${d[0]} avarge: ${d[1]}`)

          setCurrentIncome(d[2])
          setAvargeIncome(d[3])
          console.log(`loaded income: current: ${d[2]} avarge: ${d[3]}`)
          
        })
        
        try{
          console.log(`loaded data: ${data.length} entrys from User "${currentUser}"`)
        }
        catch{
          console.log(`No data found for User "${currentUser}"`)
        }

      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // 1.2 load current data
  useEffect(() => {

    fetchData()

  }, [currentUser]);
  
  // 2. wait until loading is finished
  if (loading){
    return (
      <View style={{flex:1, ...style.dark}}> 
        <StatusBar style="light" backgroundColor={colorPallet.black}/>
      </View>
    )
  }

  // 3. check if data is null
  if  (data == null && !loading){
    console.log(`Generating data...`)
    setToWelcomeData()
    setData(currentUserData)
    const saveAndRefresh = async () => {
      await SaveCurrentUser().then(() => {
        fetchData()
      })
    }
    saveAndRefresh()
    
  }

  // 4. get current language dictionary
  const dictionary = languageDictionary()

  // 5. create add Data function / create Click and ChangeUser function
  const AddDataClick = async () => {
    console.log(`\nAdd ${JSON.stringify(newEntry)} to ${currentuserKey}`)
    AddToCurrentUserData(newEntry)
    setCurrentUserData(SortById(currentUserData))
    await SaveCurrentUser().then(async () => {
      setData(currentUserData)
      setModal(false)

      await CalculateExpendituresIcome().then((d) => {
        setCurrentExpenditures(d[0])
        setAvargeExpenditures(d[1])
        console.log(`loaded expenditures: current: ${d[0]} avarge: ${d[1]}`)

        setCurrentIncome(d[2])
        setAvargeIncome(d[3])
        console.log(`loaded income: current: ${d[2]} avarge: ${d[3]}`)
      })

    })
  }

  const ChangeUser = async (keyOfUser) => {
    console.log(`\nChange User to "${keyOfUser}"`)
    
    setCurrenUser(keyOfUser)
    setCurrentUserKey(keyOfUser)

    setChangeUserModal(false)
    setCreateNewUserModal(false)

    // setLoading(true)
  }

  // 6. loading is finished and data is not null
  if (data != null)
  {
    return (
      <View style={{flex:1, ...style.dark}}>  

        <ScrollView alignItems="center"  style={{flex:1, ...style.dark}}>

            <View style={{marginTop:10, alignItems:"center", ...style.dark}}>
              <HeadLine text={currentUser}/>
            </View>

            <View style={{alignItems:"center", ...style.upArear}}>

              <View>
                <BankBalanceLable text={ValueToString(data[0].bankBalance)} marginTop={30} marginBottom={50}/>
              </View>

              <InfoBox avargeIncome={avargeIncome} currentMonthIncome={currentIncome} avargeExpenditures={avargeExpenditures} currentMonthExpenditures={currentExpenditures}/>

            </View>

            <View style={{alignItems:"center", ...style.downArear}}>
              <ExpendituresIncomComp onPress={() => setModal(true)} listItems={data.slice(0, 40).map((value) => <ExpendituresIncomListItem key={value.id} status={value.state} date={SetDateString(value.date.day, value.date.month, value.date.year)} value={value.amount}/>)}/>
            </View>

            <AddEntryModal isVisible={modal} closePress={() => setModal(false)} createClick={AddDataClick}/>
            
            <ChangeUserModal openCreateUser={() => setCreateNewUserModal(true)} isVisible={changeUserModal} closeModal={() => setChangeUserModal(false)} keys={allKeys} reloadData={(keyOfUser) => ChangeUser(keyOfUser)}/>
        
            <CreateNewUserModal isVisible={createNewUserModal} closeModal={() => setCreateNewUserModal(false)} allUserKeys={allKeys} reloadData={(newUser) => ChangeUser(newUser)}/>

        </ScrollView>

        <CahngeUserButton onPress={() => setChangeUserModal(true)}/>


        <StatusBar style="light" backgroundColor={colorPallet.black}/>
      </View>

    );
  }
};

const style = StyleSheet.create({
  screen: {
      flex: 1,
  },
  dark: {
    backgroundColor:colorPallet.black
  },
  upArear: {
    backgroundColor: colorPallet.bg_1f,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    borderRadius:10,
    width:Dimensions.get("window").width - 10

  },
  downArear: {
    backgroundColor: colorPallet.bg_2e,
    marginBottom: 10,
    flex: 1,
    height:700,
    borderRadius:10,
    width:Dimensions.get("window").width - 10,
  }
})

export default MainMenu;