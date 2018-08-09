import React, {Component} from 'react';
import {Button, Checkbox, Form, Grid, Header, Input} from "semantic-ui-react";

class Create extends Component {
    render() {
        return (
            <div className="Create">
                <Header as='h1'>Create game</Header>

                <Form>
                    <Grid columns={2} stackable>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Form.Field>
                                    <label>Max players</label>
                                    <Input placeholder='10'/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Picker time</label>
                                    <input placeholder='60'/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Czar time</label>
                                    <input placeholder='60'/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Score to win</label>
                                    <input placeholder='10'/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Card count</label>
                                    <input placeholder='10'/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Blanks limit</label>
                                    <input placeholder='3'/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Use blank cards</label>
                                    <Checkbox/>
                                </Form.Field>
                            </Grid.Column>
                            <Grid.Column width={2}>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Form.Field>
                                    <label>Card packs</label>
                                    <Input placeholder='10'/>
                                </Form.Field>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                <Button type='submit' primary>Create game</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>
            </div>
        )
    }
}

export default Create;