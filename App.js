import * as React from 'react';
import { Appbar, List, DataTable, Button } from 'react-native-paper';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const MyComponent = () => {

  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <View>

          <Appbar.Header style={styles.header}>

            <Image style={styles.menu} source={require("./assets/menu.png")} />
            <Image style={styles.logo} source={require("./assets/logo-senac.png")} />
            <Image style={styles.lupa} source={require("./assets/lupa.png")} />
            <Image style={styles.threetap} source={require("./assets/threetap.png")} />

          </Appbar.Header>

        </View>

        {/* Conceito e feedbacks */}
        <View style={{ alignItems: "baseline", marginTop: 40 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#B3B3B3' }} />
            <View style={{ flex: 1, height: 1, backgroundColor: '#B3B3B3' }} />
          </View>
          <Text style={{ fontSize: 16, marginTop: 25}}>CONCEITOS E FEEDBACKS</Text>
          <Text style={{ fontSize: 16, marginBottom: 25, color: '#3F51B5' }}>Dashboard / Link 1 / Link 2</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#B3B3B3' }} />
            <View style={{ flex: 1, height: 1, backgroundColor: '#B3B3B3' }} />
          </View>
        </View>

        {/* NOTAS */}
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Text style={{ fontSize: 16 }}>Notas</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#B3B3B3' }} />
            <View style={{ flex: 1, height: 1, backgroundColor: '#B3B3B3' }} />
          </View>
        </View>

        <View>
          <List.Section>
            <List.Accordion
              title="UC1"
              onPress={handlePress}>

              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={styles.centerCell}>C1</DataTable.Title>
                  <DataTable.Title style={styles.centerCell}>Rec C1</DataTable.Title>
                  <DataTable.Title style={styles.centerCell}>C2</DataTable.Title>
                  <DataTable.Title style={styles.centerCell}>Rec C2</DataTable.Title>
                  <DataTable.Title style={styles.centerCell}>Nota final</DataTable.Title>
                  <DataTable.Title style={styles.centerCell}>Status</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={styles.centerCell}>B</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}></DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>S</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}></DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>B</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>Ap</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={styles.centerCell}>I</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>O</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>S</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}></DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>B</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>Ap</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={styles.centerCell}>I</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>I</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>I</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>I</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>I</DataTable.Cell>
                  <DataTable.Cell style={styles.centerCell}>Rp</DataTable.Cell>
                </DataTable.Row>

                {/* TAREFAS */}

                <View style={{ alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                  <Text style={{ fontSize: 16 }}>Tarefas</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                  </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                  <Button mode="contained" buttonColor="#020202">
                    Geral
                  </Button>
                  <Button mode="contained" buttonColor="#D9D9D9" textColor="#020202">
                    C1
                  </Button>
                  <Button mode="contained" buttonColor="#D9D9D9" textColor="#020202">
                    C2
                  </Button>
                </View>

                <View>

                  <DataTable>
                    <DataTable.Row>
                      <DataTable.Cell>Tarefa 1</DataTable.Cell>
                      <DataTable.Cell numeric>B</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell>Tarefa 2</DataTable.Cell>
                      <DataTable.Cell numeric>O</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell>Tarefa 3</DataTable.Cell>
                      <DataTable.Cell numeric>O</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell>Atividade Av</DataTable.Cell>
                      <DataTable.Cell numeric>B</DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>

                </View>

              </DataTable>

            </List.Accordion>

            <List.Accordion
              title="UC2"
              onPress={handlePress}>

            </List.Accordion>

            <List.Accordion
              title="UC3"
              onPress={handlePress}>
            </List.Accordion>

            <List.Accordion
              title="UC4"
              onPress={handlePress}>
            </List.Accordion>
          </List.Section>
        </View>

      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  centerCell: {
    display: 'flex',
    justifyContent: "center"
  },
  header: {
    backgroundColor: '#004587',
    height: 64,
  },
  menu: {
    width: 25,
    height: 18,
    marginLeft: 16,
    marginRight: 16,
  },
  logo: {
    width: 50,
    height: 40,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  lupa: {
    width: 18,
    height: 20,
    marginLeft: 220
  },
  threetap: {
    width: 5,
    height: 18,
    marginLeft: 15
  },
})

export default MyComponent;

//  https://callstack.github.io/react-native-paper/list-accordion.html