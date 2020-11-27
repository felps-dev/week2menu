import React from 'react';
import {View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import { Appbar, Searchbar, Badge, Button, Card, TouchableRipple, Paragraph } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const NewCard = (obj, navigation) => {
  return (
    <TouchableRipple onPress={() => navigation.navigate("Produtos", {id: obj.item.id})} rippleColor="rgba(0, 0, 0, .32)" >
      <Card style={{height: '100%'}} >
        <Card.Cover style={{height: 100}} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Paragraph style={{fontWeight: "bold"}}>Nome do Restaurante</Paragraph>
          <Paragraph>{obj.item.name}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="outlined" style={{width: '100%'}} >Order Now</Button>
        </Card.Actions>
      </Card>
    </TouchableRipple>
  );
}

export default function Inicio({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = React.useState([]);

  const onChangeSearch = query => setSearchQuery(query);

  React.useEffect(() => {
    fetch("http://187.67.216.254:8000/api/vendors/")
    .then(res => res.json())
    .then(res => {
      setData(res)
    })
  },[])

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Appbar.Content title="Mapa de Pedidos" />
      </Appbar.Header>
      <View style={{position: "relative"}}>
        <View
          style={{
            justifyContent: 'center', 
            paddingHorizontal: 24,
            paddingTop: 8,
            position: "absolute", 
            width: "100%"
            }}
        >
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <View style={{
            zIndex: 999, 
            flexDirection: "row", 
            justifyContent: "space-evenly",
            paddingTop: 8
          }}>
            <Badge style={{paddingHorizontal: 16}} size={30} >Badge 1</Badge>
            <Badge style={{paddingHorizontal: 16}} size={30} >Badge 2</Badge>
            <Badge style={{paddingHorizontal: 16}} size={30} >Badge 3</Badge>
          </View>
        </View>
        <MapView
          style={{width: "100%", height: "100%"}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View style={{width: '100%', bottom: "10%", zIndex: 999, position: "absolute"}}>
          <Carousel
            data={data}
            renderItem={(e) => NewCard(e, navigation)}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            useScrollView={true}
          />
      </View>
    </View>
  );
}