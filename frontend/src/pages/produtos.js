import React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Card, Paragraph} from 'react-native-paper';

// import { Container } from './styles';

export default function Produtos({route, navigation}) {
    const { id } = route.params;
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://187.67.216.254:8000/api/vendors/${id}/products`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
          setData(res)
        })
    },[])
    return (
        <View>
            <Appbar.Header>
                <Appbar.Action icon="chevron-left" onPress={() => {navigation.goBack()}} />
                <Appbar.Content title="Produtos" />
            </Appbar.Header>
            <View style={{flexDirection: 'row', maxWidth: "100%", justifyContent: "space-between", flexWrap: 'wrap'}}>
                {data.map((prod, index) => (
                    <Card key={index} style={{width: '45%', margin: 8}}>
                        <Card.Cover style={{height: 150}} source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Content>
                            <Paragraph>{prod.name}</Paragraph>
                        </Card.Content>
                    </Card>
                ))}
            </View>
        </View>
    );
}