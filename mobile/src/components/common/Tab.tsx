import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '~/styles/colors';
import { assets } from '~/styles/app/assets';
import { TabStyle } from '~/styles/app/components/common/TabStyle';

interface TabProps {
    type: 'Navbar' | 'ModalTitle' | 'Register';
}
interface TabItem {
    key: string;
    labels: string;
}

const tabs: { [key: string]: TabItem[] } = {
    Navbar: [
        { key: '1', labels: 'TechnoCal Details' },
        { key: '2', labels: 'Similar Products' },
        { key: '3', labels: 'Comments' }
    ],
    ModalTitle: [
        { key: '1', labels: 'Images' },
        { key: '2', labels: 'Videos' },
    ],
    Register: [
        { key: '1', labels: 'Login' },
        { key: '2', labels: 'Register' }
    ]
};

const Tab: React.FC<TabProps> = ({ type }) => {
    const [currentItem, setCurrentItem] = useState<string | null>(null)

    useEffect(() => {
        setCurrentItem(tabs[type][0].key);
    }, [type]);

    const renderTab = (item: TabItem) => (
        <TouchableOpacity
            key={item.key}
            style={TabStyle.itemContainer}
            onPress={() => setCurrentItem(item.key)}
        >
            <Text style={[getTextStyle(type),currentItem === item.key && { color: colors.primary }]}>{item.labels}</Text>
            <View style={[
                TabStyle.line,
                currentItem === item.key && { backgroundColor: colors.primary }
            ]}></View>
        </TouchableOpacity>
    )
    const getTextStyle = (type: 'Navbar' | 'ModalTitle' | 'Register') => {
        switch (type) {
            case 'Navbar':
                return TabStyle.textNavbar
            case 'ModalTitle':
                return TabStyle.textModalTitle;
            case 'Register':
                return TabStyle.textRegister;
            default:
                return {};
        }
    }
    const getContainerStyle = (type: 'Navbar' | 'ModalTitle' | 'Register') => {
        switch (type) {
            case 'Navbar':
                return TabStyle.containerNavbar;
            case 'ModalTitle':
                return TabStyle.containerModal;
            case 'Register':
                return TabStyle.containerRegister;
            default:
                return {};
        }
    };
    return (
        <View style={getContainerStyle(type)}>
            {tabs[type].map(renderTab)}
            {type == 'ModalTitle' &&
                <View style={TabStyle.buttonClose}>
                    <Image style={TabStyle.iconClose} source={assets.icon.close_circle_inactive} />
                    <View style={TabStyle.line}></View>
                </View>}
        </View>
    )
}
export default Tab

const styles = StyleSheet.create({})
