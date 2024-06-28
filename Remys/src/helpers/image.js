import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CachedImage = (props) => {
    const [cachedSource, setCachedSource] = useState(null);
    const { uri } = props;

    useEffect(() => {
        const getCachedImage = async () => {
            try {
                const cachedImageData = await AsyncStorage.getItem(uri);
                if (cachedImageData) {
                    setCachedSource({ uri: cachedImageData });
                } else {
                    const response = await fetch(uri);
                    const imageBlob = await response.blob();
                    const base64Data = await new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(imageBlob);
                        reader.onloadend = () => {
                            resolve(reader.result);
                        };
                        reader.onerror = (error) => {
                            console.error('Error converting image to base64:', error);
                            reject(error);
                        };
                    });

                    await AsyncStorage.setItem(uri, base64Data); // Base64-Daten im AsyncStorage speichern
                    setCachedSource({ uri: base64Data }); // Setzen der Base64-Daten als Quelle
                }
            } catch (error) {
                console.error('Error caching image:', error);
                setCachedSource({ uri }); // Verwenden der Standard-URI im Fehlerfall
            }
        };

        getCachedImage();
    }, [uri]); // Abhängigkeit von der URI hinzufügen, um erneutes Laden bei Änderung zu ermöglichen

    return <Animated.Image source={cachedSource} {...props} />;
};
