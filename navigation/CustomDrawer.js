import React, { useState } from 'react';
import Animated, { useSharedValue } from 'react-native-reanimated';
import {
    View, Text, Image, TouchableOpacity
} from 'react-native';

import {
    createDrawerNavigator, DrawerContentScrollView, useDrawerProgress, useDrawerStatus
} from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { setSelectedTab } from '../stores/tab/tabAction';
import { MainLayout } from '../screens';

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';



const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center',
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white
                }}
            />
            <Text
                style={{
                    marginLeft: 15,
                    color: COLORS.white, ...FONTS.h3
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab, setProgress }) => {
    const dstatus = useDrawerStatus()
    const closeDrawer = () => {
        navigation.closeDrawer()
    }
    React.useEffect(() => {
        if (dstatus === "open") {
            setProgress(1)
        } else {
            setProgress(0)
        }
    }, [dstatus])

    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.radius
                }}
            >
                <View
                    style={{
                        alignItems: 'flex-start',
                        justifyContent: "center"
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => closeDrawer()}
                    >
                        <Image
                            source={icons.cross}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
                {/* Profile */}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center'
                    }}
                    onPress={() => console.log('profile')}
                >
                    <Image
                        source={dummyData.myProfile?.profile_image}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View
                        style={{
                            marginLeft: SIZES.radius
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                            {dummyData.myProfile?.name}
                        </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
                            View your profile
                        </Text>
                    </View>

                </TouchableOpacity>
                {/* Drawer Items */}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding
                    }}
                >
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        onPress={() => {
                            setSelectedTab(constants.screens.home)
                            navigation.navigate("MainLayout")
                        }}

                    />
                    <CustomDrawerItem label={constants.screens.my_wallet} icon={icons.wallet}
                        isFocused={selectedTab == constants.screens.my_wallet}
                        onPress={() => {
                            setSelectedTab(constants.screens.my_wallet)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem label={constants.screens.notification} icon={icons.notification}
                        isFocused={selectedTab == constants.screens.notification}
                        onPress={() => {
                            setSelectedTab(constants.screens.notification)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem label={constants.screens.favourite} icon={icons.favourite}
                        isFocused={selectedTab == constants.screens.favourite}
                        onPress={() => {
                            setSelectedTab(constants.screens.favourite)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    {/* Line Divider */}
                    <View
                        style={{
                            height: 1,
                            marginVertical: SIZES.radius,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1
                        }}
                    ></View>
                    <CustomDrawerItem label="Track Your Order" icon={icons.location} />
                    <CustomDrawerItem label="Coupons" icon={icons.coupon} />
                    <CustomDrawerItem label="Settings" icon={icons.setting} />
                    <CustomDrawerItem label="Invite a Friend" icon={icons.profile} />
                    <CustomDrawerItem label="Help Center" icon={icons.help} />
                </View>
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <CustomDrawerItem label="Logout" icon={icons.logout} />
                </View>
            </View>

        </DrawerContentScrollView>
    )
}

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
    const [progress, setProgress] = useState(new Animated.Value(0))
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary,
            }}
        >
            <Drawer.Navigator

                screenOptions={{
                    drawerStyle: {
                        flex: 1,
                        width: '65%',
                        paddingRight: 20,
                        backgroundColor: 'transparent'
                    },

                    drawerType: 'slide',
                    overlayColor: 'transparent',
                    sceneContainerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerShown: false,
                }}
                useLegacyImplementation={false}
                initialRouteName="MainLayout"
                drawerContent={props => {
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                            setProgress={setProgress}
                        />
                    )
                }}
            >
                <Drawer.Screen name='MainLayout'>
                    {props => <MainLayout {...props}
                        progress={progress}
                    />}

                </Drawer.Screen>

            </Drawer.Navigator>
        </View>
    )
}



function mapStateToProps(state) {
    return {
        selectedTab: state?.tabReducer?.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => {
            return dispatch(setSelectedTab(selectedTab))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)