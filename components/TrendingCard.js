import { View, Text, TouchableOpacity, Image, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, icons } from '../constants'
const TrendingCard = ({contanerStyle, recipeItem, onPress}) => {
  return (
    <TouchableOpacity
        style={{
            height: 350,
            width: 250,
            marginTop: 11, 
            marginRight: 20,
            borderRadius: 11,
            ...contanerStyle
        }}
    >
        {/* Background Image */}
        <Image 
            source={recipeItem.image}
            style={{
                width: 250,
                height: 350,
                borderRadius: 11
            }}
        />

        {/* Category */}
        <View 
            style={{
                position: "absolute",
                top:20,
                left: 15,
                paddingHorizontal: 11,
                paddingVertical: 5, 
                backgroundColor: COLORS.transparentGray,
                borderRadius: 11,
            }}
        >
            <Text
                style={{
                    color: COLORS.white,
                    ...FONTS.h4
                }}
            >
                {recipeItem.category}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default TrendingCard