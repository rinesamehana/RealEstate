import { observer } from 'mobx-react-lite';
import React from 'react';
import { Divider, Grid, Header, Item, Reveal, Segment, Statistic , Button} from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';




interface Props{
    profile : Profile;
}

export default observer( function ProfileHeader({profile} :Props){
   return(
       <Segment>
        <Grid>
            <Grid.Column width={12}>
                <Item.Group>
                    <Item>
                        <Item.Image avatar size='small' src={profile.image || 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='}/>
                            <Item.Content verticalAlign='middle'>
                                <Header as='h1' content={profile.displayName}/>
                            </Item.Content>
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

})