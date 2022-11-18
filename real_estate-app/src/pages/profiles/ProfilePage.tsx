import ProfileHeader from './ProfileHeader';
import { Grid } from 'semantic-ui-react';

export default function ProfilePage() {
    return (
        <Grid>
            <Grid.Column width={16}>
                <ProfileHeader/>
            </Grid.Column>
        </Grid>
    )
}




  // const { username } = useParams<{ username: string }>();
    // const { profileStore } = useStore();
    // const { loadingProfile, loadProfile, profile, setActiveTab } = profileStore;

    // useEffect(() => {
    //     loadProfile(username);
    //     return () => {
    //         setActiveTab(0);
    //     }
    // }, [loadProfile, username, setActiveTab])

    // if (loadingProfile) return <LoadingComponent content='Loading profile...' />