import React from 'react';

import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';


import { FONTS, SIZES, COLORS, icons, dummyData } from '../constants';

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
        >
            {/* Image  */}
            <Image
                source={item.image}
                style={imageStyle}
            />


            {/* Info */}
            <View style={{ flex: 1 }}>
                {/* Name  */}
                <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>
                {/* Description  */}
                <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>{item.description}</Text>
                {/* Pricce  */}
                <Text style={{ ...FONTS.h2, marginTop: SIZES.base }}>${item.price}</Text>
            </View>
            {/* Colories */}
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 5,
                    right: SIZES.radius
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
        </TouchableOpacity>
    )
}

export default HorizontalFoodCard