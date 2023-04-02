import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";


const Layout = () => {

    const [fontLoaded] = useFonts ({
        'SPOTFONT' : require('../assets/Gotham-Bold.otf')
    })

    const onLayoutRootView =useCallback(async () => {
        if (fontLoaded) {
            await SplashScreen.hideAsync();
                }
    }, [fontLoaded] )
      if(!fontLoaded) return null
    return <Stack onLayout={onLayoutRootView}/>;
}

export default Layout