import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, BackHandler, Alert } from 'react-native';
import BankBalanceLable from '../components/Lables/bankBalance';
import HeadLine from '../components/Lables/headlins';
import colorPallet from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import ExpendituresInfo from '../components/fullComp/info';
import { avargeExpenditures, currentMonthExpenditures } from '../variables/float';
import ExpendituresIncomComp from '../components/fullComp/expendituresIncom';
import ValueToString from '../Functions/valueToString';
import { DeleteCurrentUserKey, SaveCurrentUser, getData, storeData } from '../Functions/dataDealer';
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
import DefaultButton from '../components/Buttons/default';

const MainMenu = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [changeUserModal, setChangeUserModal] = useState(false)
  const [createNewUserModal, setCreateNewUserModal] = useState(false)
  const [allKeys, setAllKeys] = useState([])
  const [currentUser, setCurrenUser] = useState(currentuserKey)

  // 1.1 Create function, to load all data
  const fetchData = async () => {
    try {
      await getData(currentUser).then(async (data) => {
        try {
          sorted = SortById(data)
        }
        catch {
          sorted = null
        }
        await AsyncStorage.getAllKeys().then((data) => {
          setAllKeys(data == undefined ? [`[ERROR] no user found`]: data.filter(item => item != "settings" && item != "currentUser"))
        })

        setCurrentUserData(sorted)
        setData(sorted)
        
        console.log(`loaded data: ${data.length} entrys`)
        console.log(`from User ${currentUser}`)

      })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // 1.2 load current data
  useEffect(() => {

    // only refresh data, when modal is not open
    fetchData()
  }, []);
  
  // 2. wait until loading is finished
  if (loading){
    return (
      <View style={{flex:1, ...style.dark}}> 
      </View>
    )
  }

  // 3. check if data is null
  if  (data == null && !loading){
    console.log(`No data for user ${currentUser}. Generating data...`)
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
    AddToCurrentUserData(newEntry)
    setCurrentUserData(SortById(currentUserData))
    await SaveCurrentUser().then(() => {
      setData(currentUserData)
      setModal(false)
    })
  }

  const ChangeUser = async (keyOfUser) => {
    setCurrenUser(keyOfUser)
    setCurrentUserKey(keyOfUser)
    setChangeUserModal(false)
    await fetchData().then(() => {
      console.log("Loaded")
    })
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

            <DefaultButton text="Delet UserKey" onPress={DeleteCurrentUserKey}/>

            <View style={{alignItems:"center", ...style.upArear}}>

              <View>
                <BankBalanceLable text={ValueToString(data[0].bankBalance)} marginTop={30}/>
              </View>

              <ExpendituresInfo avargeExpenditures={avargeExpenditures} currentMonthExpenditures={currentMonthExpenditures}/>

            </View>

            <View style={{alignItems:"center", ...style.downArear}}>
              <ExpendituresIncomComp onPress={() => setModal(true)} listItems={data.map((value) => <ExpendituresIncomListItem key={value.id} status={value.state} date={SetDateString(value.date.day, value.date.month, value.date.year)} value={value.amount}/>)}/>
            </View>

            <AddEntryModal isVisible={modal} closePress={() => setModal(false)} createClick={AddDataClick}/>
            
          <ChangeUserModal openCreateUser={() => setCreateNewUserModal(true)} isVisible={changeUserModal} closeModal={() => setChangeUserModal(false)} keys={allKeys} reloadData={(keyOfUser) => ChangeUser(keyOfUser)}/>
        
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
    height:400,
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