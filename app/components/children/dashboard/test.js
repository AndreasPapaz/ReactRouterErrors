import React, {Component} from 'react';
import { Button, Checkbox, Form, Icon, List, Card, Image, Grid, Container, Header, Item, Table} from 'semantic-ui-react';
import { Link } from 'react-router';
import axios from 'axios';

const test = (props) => {
	return(
          <Card>
	            <Image src={props.img} />

	            <Card.Content>
	              <Card.Header>
	                {props.name}
	              </Card.Header>

	              <Card.Meta>
	                <span className='date'>
	                  Joined in 2017
	                </span>
	              </Card.Meta>

	            <Card.Description>
	                Adrian is a world traveler living in Chicago, IL.
	              </Card.Description>
	            </Card.Content>

	            <Card.Content extra>
	              <a>
	                <Icon name='user' />
	                500+ Friends
	              </a>
	            </Card.Content>

	            <Card.Content extra>
	                  <List className='info-section'>
	                  <List.Item icon='user' content='Adrian J. Segura' />
	                  <List.Item icon='marker' content='Chicago, IL' />
	                  <List.Item icon='mail' content={<a href='mailto:adrian@travlr.com'>jadrian@travlr.com</a>} />
	                  <List.Item icon='linkify' content={<a href='http://www.github.com/adi727'>Github</a>} />
	                </List>
	            </Card.Content>

          </Card>
    )
}

export default test;