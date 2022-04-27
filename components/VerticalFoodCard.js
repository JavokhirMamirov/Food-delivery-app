import React from 'react';

import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';


import { FONTS, SIZES, COLORS, icons, dummyData } from '../constants';

const VerticalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: 200,
                padding: SIZES.radius,
                borderRadius: SIZES.radius,
                alignItems: 'center',
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
        >
            {/* Colories */}
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    marginTop: 10
                }}
            >
                <Image
                    source={icons.calories}
                    style={{
                        height: 30,
                        width: 30
                    }}
                />
                <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>{item.calories} Calories</Text>

            </View>
            {/* Image  */}
            <View
                style={{
                    height: 150,
                    width: 150,
                    marginTop: 15,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.image}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>



            {/* Info */}
            <View style={{ marginTop: -20, alignItems: 'center' }}>
                {/* Name  */}
                <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>
                {/* Description  */}
                <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>{item.description}</Text>
                {/* Pricce  */}
                <Text style={{ ...FONTS.h2, marginTop: SIZES.base }}>${item.price}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default VerticalFoodCard