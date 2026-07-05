package com.example.androidclitest.theme

import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalContext

private val DarkColorScheme =
  darkColorScheme(
    primary = ConsoleGreen,
    onPrimary = ConsoleDarkBg,
    secondary = CyanSignal,
    onSecondary = ConsoleDarkBg,
    background = ConsoleDarkBg,
    onBackground = ConsoleInk,
    surface = ConsoleSurface,
    onSurface = ConsoleInk,
    outline = ConsoleMuted,
  )

private val LightColorScheme =
  lightColorScheme(
    primary = ConsoleGreen,
    onPrimary = ConsoleDarkBg,
    secondary = CyanSignal,
    onSecondary = ConsoleDarkBg,
    background = ConsoleDarkBg,
    onBackground = ConsoleInk,
    surface = ConsoleSurface,
    onSurface = ConsoleInk,
    outline = ConsoleMuted,
  )

@Composable
fun AndroidCliTestTheme(
  darkTheme: Boolean = isSystemInDarkTheme(),
  // Dynamic color is disabled by default to enforce high-precision console theme
  dynamicColor: Boolean = false,
  content: @Composable () -> Unit,
) {
  val colorScheme =
    when {
      dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
        val context = LocalContext.current
        if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
      }
      darkTheme -> DarkColorScheme
      else -> LightColorScheme
    }

  MaterialTheme(colorScheme = colorScheme, typography = Typography, content = content)
}
