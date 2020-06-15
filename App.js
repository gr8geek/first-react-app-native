import React from 'react';
import {Text,SectionList,StyleSheet,FlatList, View} from 'react-native';
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};
export default App = ()=>{
      return(
        <View>
                 
                 <FlatList
          style={{
            backgroundColor:"#ad0a67",
          }}
          data={
            [
              {key: 'Devin'},
              {key: 'Dan'},
              {key: 'Dominic'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},

            ]
          }
          renderItem={({item})=>{
            return(
              <Text style={{
                padding: 40,
                fontSize: 30,
                borderWidth: 7,
                borderColor:"#85d11b",
                backgroundColor:"#7766ee",
                borderRadius:15,
              }}>{item.key}</Text>
            )
          }}>
            
          </FlatList>
          <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      
        </View>
        
      )
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
