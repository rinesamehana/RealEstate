import { observer } from 'mobx-react-lite';
import React from 'react';
import { Divider, Grid, Header, Item, Reveal, Segment, Statistic , Button} from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';


export default function ProfileHeader(){
   return(
       <Segment>
        <Grid>
            <Grid.Column width={12}>
                <Item.Group>
                    <Item>
                        <Item.Image avatar size='small' src={'/assets/user.png'}>
                            <Item.Content verticalAlign='middle'>
                                <Header as='h1' content='Displayname'/>
                            </Item.Content>

                        </Item.Image>
                    </Item>
                    </Item.Group>     
            </Grid.Column>
            <Grid.Column width={4}>
                 <Statistic.Group widths={2}>
                    <Statistic label='Followers' value ='5'/>
                    <Statistic label='Following' value ='42'/>
                 </Statistic.Group>
                 <Divider/>
                 <Reveal animated='move'>
                    <Reveal.Content visible style={{width:'100%'}}>
                        <Button fluid color='teal' content='Following'/>
                    </Reveal.Content>
                    <Reveal.Content hidden style={{width:'100%'}}>
                        <Button 
                        fluid 
                        color= {true ? 'red' : 'green'}
                        content={true ? 'unfollow' : 'follow'}
                        />
                    </Reveal.Content>
                 </Reveal>
            </Grid.Column>
        </Grid>
       </Segment>

   )

}