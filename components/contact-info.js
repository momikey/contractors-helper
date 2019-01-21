import { Container, Content, Form, Input, Item, Label, Header, Right, Button, Icon } from "native-base";
import React from "react";

export default class ContactInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <Container>
                <Header>
                    <Right>
                        <Button transparent>
                            <Icon name='close' type='MaterialIcons' />
                        </Button>
                        <Button transparent onPress={ () => alert(JSON.stringify(this.state)) }>
                            <Icon name='done' type='MaterialIcons' />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input onChangeText={(text) => this.setState({ name: text })} />
                        </Item>

                        <Item floatingLabel>
                            <Label>Address Line 1</Label>
                            <Input onChangeText={(text) => this.setState({ address1: text })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Address Line 2</Label>
                            <Input onChangeText={(text) => this.setState({ address2: text })} />
                        </Item>

                        <Item floatingLabel>
                            <Label>Phone number</Label>
                            <Input onChangeText={(text) => this.setState({ phone: text })} />
                        </Item>

                        <Item floatingLabel>
                            <Label>Email Address</Label>
                            <Input onChangeText={(text) => this.setState({ email: text })} />
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}