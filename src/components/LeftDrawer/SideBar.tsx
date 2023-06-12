import * as React from 'react'
import { Image, View } from "react-native";
import { connect } from 'react-redux'
import { Color } from '@common'
import { Text, Container, List, ListItem, Content, Icon } from "native-base";
import styles from './styles'

interface Props extends StateProps, DispatchProps {
    navigation: any
}

interface States {
    error: string
    isLoading: boolean
    routes: any[]
}

const INITIAL_STATE: States = {
    error: "",
    isLoading: false,
    routes: [],
};


class SideBar extends React.Component<Props, States> {

    constructor(props: Props) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }

    componentDidUpdate(prevProps) {
        const { pages } = this.props;
        if (pages !== prevProps.pages) {
            this.setState({ routes: pages })
        }
    }

    loginRandor() {
        const { navigator, login, token } = this.props
        if (token) {
            return <List
                contentContainerStyle={{ marginTop: 20 }}>
                <ListItem
                    button
                    onPress={() => { login(null, null); navigator('Login') }}
                >
                    <Icon type={'AntDesign'} name={'logout'} style={{ fontSize: 20, color: Color.black, marginRight: 15 }} />
                    <Text>{'Logout'}</Text>
                </ListItem>
            </List>
        } else {
            return <List
                contentContainerStyle={{ marginTop: 20 }}>
                <ListItem
                    button
                    onPress={() => { navigator('Login') }}
                >
                    <Icon type={'AntDesign'} name={'login'} style={{ fontSize: 20, color: Color.black, marginRight: 15 }} />
                    <Text>{'Login'}</Text>
                </ListItem>
            </List>
        }
    }

    randerLogo() {
        const { user } = this.props
        if (user && user.profile_image) {
            return <View><Image style={styles.userImg} source={{ uri: user.profile_image }} /></View>
        } else {
            return <View style={styles.userImg}><Icon type={'AntDesign'} name={'user'} style={{ fontSize: 20, color: Color.black }} /></View>
        }
    }

    render() {
        const { routes } = this.state
        const { navigator, user } = this.props
        return (
            <Container>
                <Content>
                    <View style={styles.drawerHeader}>
                        {this.randerLogo()}
                        <View>
                            <Text style={styles.nameTxt}>{user ? user.full_name : ''}</Text>
                            <Text style={styles.subTxt}>{user ? user.email : ''}</Text>
                            <Text style={styles.subTxt}>{user ? user.mobile : ''}</Text>
                        </View>
                    </View>
                    <List
                        contentContainerStyle={{ marginTop: 20 }}>
                        <ListItem
                            button
                            onPress={() => { navigator('Home') }}
                        >
                            <Icon type={'AntDesign'} name={'home'} style={{ fontSize: 20, color: Color.black, marginRight: 15 }} />
                            <Text>{'Home'}</Text>
                        </ListItem>
                    </List>
                    <List
                        contentContainerStyle={{ marginTop: 20 }}>
                        <ListItem
                            button
                            onPress={() => { navigator('OrdersHistory') }}
                        >
                            <Icon type={'AntDesign'} name={'bars'} style={{ fontSize: 20, color: Color.black, marginRight: 15 }} />
                            <Text>{'Order History'}</Text>
                        </ListItem>
                    </List>
                    <List
                        contentContainerStyle={{ marginTop: 20 }}>
                        <ListItem
                            button
                            onPress={() => { navigator('PushList') }}
                        >
                            <Icon type={'Entypo'} name={'bell'} style={{ fontSize: 20, color: Color.black, marginRight: 15 }} />
                            <Text>{'Messages'}</Text>
                        </ListItem>
                    </List>
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => navigator('CustomPage', data)}
                                >
                                    <Icon type={'AntDesign'} name={'file1'} style={{ fontSize: 20, color: Color.black, marginRight: 15 }} />
                                    <Text>{data.meta_title}</Text>
                                </ListItem>
                            );
                        }}
                    />
                    {this.loginRandor()}
                </Content>
            </Container>
        );
    }
}


interface StateProps {
    netInfo: any,
    user: any[]
    pages: any[]
    token: any
}

const mapStateToProps = (state: any): StateProps => ({
    netInfo: state.netInfo,
    user: state.user.user,
    pages: state.user.pages,
    token: state.user.token,
})

interface DispatchProps {
    login: any;
    setPages: any;
}

const mapDispatchToProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
    const { dispatch } = dispatchProps;
    const { actions } = require('@stores/UserStore')
    return {
        ...stateProps,
        ...ownProps,
        login: (data: any, token: any) => dispatch(actions.login(data, token)),
        setPages: (data: any) => dispatch(actions.setPages(data)),
    }
}
export default connect(mapStateToProps, undefined, mapDispatchToProps)(SideBar)