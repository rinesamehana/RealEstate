import { observer } from 'mobx-react-lite';
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';
// import ProfileAbout from './ProfileAbout';
// import ProfileActivities from './ProfileActivities';
// import ProfileFollowings from './ProfileFollowings';
import ProfilePhotos from './ProfilePhotos';

interface Props {
    profile: Profile;
}

export default observer(function ProfileContent({profile}: Props) {
    const {profileStore} = useStore();

    const panes = [
        {menuItem: 'About', render: () => <Tab.Pane> About Content</Tab.Pane>},
        {menuItem: 'Photos', render: () => <Tab.Pane> Photos Content</Tab.Pane>},
        {menuItem: 'Events', render: () => <Tab.Pane> Events Content</Tab.Pane>},
        {menuItem: 'Followers', render: () => <Tab.Pane> Followers Content</Tab.Pane>},
        {menuItem: 'Following', render: () => <Tab.Pane> Following Content</Tab.Pane>},
    ];

    return (
        <Tab 
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
            // onTabChange={(e, data) => profileStore.setActiveTab(data.activeIndex)}
        />
    )
})