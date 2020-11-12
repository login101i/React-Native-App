import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('')
  const [goals, setGoals] = useState([])

  const goalInputHandler = (text) => {
    setEnteredGoal(text)
  }

  const addButtonGoalHandler = () => {
    // setGoals([...goals, enteredGoal])
    setGoals(xyz => [
      ...xyz, 
      {id:Math.random().toString(), value:enteredGoal}
    ])
    console.log(enteredGoal)
  }

  return (


    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write here ..."
        value={enteredGoal}
        onChangeText={goalInputHandler}
      />
      <Button
        style={styles.button}
        title="add task"
        onPress={addButtonGoalHandler}
      />
      <View style={styles.mainList}>
        {goals.map((goal) => (
          <FlatList
            data={goals}
            keyExtractor={(item, index)=>item.id}
            renderItem={(item) => (
              <View style={styles.enteredGoal}>
                <Text >
                  {item.item.value}
                </Text>
              </View>
            
            )}
          >

          </FlatList>
        ))}
      </View>

    </ScrollView>
  )
}



const styles = StyleSheet.create({
  button: {
    backgroundColor: "grey",
    // marginVertical:10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 42,

    // justifyContent: 'center',
    // alignItems:'center',
    padding: 10

  },
  enteredGoal: {
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5,
    marginBottom: 10,
    backgroundColor: 'pink'


  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    textAlign: 'center',
    marginBottom: 5,

  },
  mainList: {
    marginTop: 20,
  }
});
