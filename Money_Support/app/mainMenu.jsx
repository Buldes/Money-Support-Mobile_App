import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import BankBalanceLable from '../components/Lables/bankBalance';
import HeadLine from '../components/Lables/headlins';
import colorPallet from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import ExpendituresInfo from '../components/fullComp/info';
import { avargeExpenditures, currentMonthExpenditures } from '../variables/float';
import ExpendituresIncomComp from '../components/fullComp/expendituresIncom';
import ValueToString from '../Functions/valueToString';
import { SaveCurrentUser, getData, storeData } from '../Functions/dataDealer';
import { currentUserData, setCurrentUserData, setToWelcomeData } from '../variables/dictionary';
import { currentuserKey } from '../variables/string';
import ExpendituresIncomListItem from '../components/fullComp/expendituresIncomistItem';
import languageDictionary from '../Functions/getLanguageDictionary';
import SetDateString from '../Functions/dateTransformer';
import { SortById } from '../Functions/dictionarySorting';
import AddEntryModal from '../components/fullComp/addEntryModal';

const MainMenu = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)

  // 1. load current data
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getData(currentuserKey).then((data) => {
          sorted = SortById(data)
          setCurrentUserData(sorted)
          setData(sorted);
        })
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    // only refresh data, when modal is not open
    fetchData()
  }, []);
  
  // wait until loading is finished
  if (loading){
    return (
      <View style={{flex:1, ...style.dark}}> 
      </View>
    )
  }

  //check if data is null
  if (data == null && !loading){
    console.log(`No data for user ${currentuserKey}. Generating data...`)
    setToWelcomeData()
    setData(currentUserData)
    SaveCurrentUser()
  }
  else if (data != null){
    console.log(`loaded data: ${data.length} entrys`)
  }

  // get current language dictionary
  const dictionary = languageDictionary()

  // loading is finished and data is not null
  if (data != null)
  {
    return (
      <View style={{flex:1, ...style.dark}}>  

        <ScrollView alignItems="center"  style={{flex:1, ...style.dark}}>

            <View style={{marginTop:10, alignItems:"center", ...style.dark}}>
              <HeadLine text={dictionary["no user jet"]}/>
            </View>

            <View style={{alignItems:"center", ...style.upArear}}>

              <View>
                <BankBalanceLable text={ValueToString(data[data.length - 1].amount)} marginTop={30}/>
              </View>

              <ExpendituresInfo avargeExpenditures={avargeExpenditures} currentMonthExpenditures={currentMonthExpenditures}/>

            </View>

            <View style={{alignItems:"center", ...style.downArear}}>
              <ExpendituresIncomComp onPress={() => setModal(true)} listItems={data.map((value) => <ExpendituresIncomListItem key={value.id} status={value.state} date={SetDateString(value.date.day, value.date.month, value.date.year)} value={value.amount}/>)}/>
            </View>

            <AddEntryModal isVisible={modal} closePress={() => setModal(false)}/>
        
        </ScrollView>

          <StatusBar style="light" backgroundColor='#000'/>
      </View>

    );
  }
};

const style = StyleSheet.create({
  screen: {
      flex: 1,
  },
  dark: {
    backgroundColor: '#000'
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
    borderRadius:10,
    width:Dimensions.get("window").width - 10,
  }
})

export default MainMenu;