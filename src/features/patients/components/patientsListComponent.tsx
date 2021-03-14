import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  SafeAreaView,
  Image,
  SectionList,
} from 'react-native';

import {appointments} from '../mock/patients';

export const PatientsListComponent = () => {
  const Item = ({data}: any) => (
    <TouchableHighlight
      onPress={() => console.log('You touched me')}
      style={styles.rowFront}
      underlayColor={'#e6e6e6'}>
      <View style={styles.groupItem}>
        <Image
          source={{
            uri: data.avatar,
          }}
          style={styles.avatar}
        />
        <View style={{flex: 1}}>
          <Text style={styles.fullName}>{data.name}</Text>
          <Text style={styles.diagnoses}>{data.diagnoses}</Text>
        </View>
        <Text>{data.time}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={appointments}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={(item) => item.key}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.groupTitle}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 50,
  },
  groupItem: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  groupTitle: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
    paddingLeft: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 20,
  },
  fullName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  diagnoses: {
    color: '#7E7E7E',
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: '#3998FC',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#DD5449',
    right: 0,
  },
});
