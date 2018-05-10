import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SearchNewsBar extends Component {
    render(){
        return(
            <Form inline>
                    <Label for="SearchNews" hidden>Search</Label>
                    <Input type="searchNews" name="searchNews" id="SearchNews" placeholder="Search for News"/>
                {''}
                <Button>Submit</Button>

            </Form>

        );
    }
}