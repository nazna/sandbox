package com.example.androidclitest.ui.main

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation3.runtime.NavKey
import com.example.androidclitest.data.DefaultDataRepository
import com.example.androidclitest.theme.AndroidCliTestTheme
import kotlinx.coroutines.delay
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@Composable
fun MainScreen(
  onItemClick: (NavKey) -> Unit,
  modifier: Modifier = Modifier,
  viewModel: MainScreenViewModel = viewModel { MainScreenViewModel(DefaultDataRepository()) },
) {
  val state by viewModel.uiState.collectAsStateWithLifecycle()
  when (state) {
    MainScreenUiState.Loading -> {
      // Blank
    }
    is MainScreenUiState.Success -> {
      MainScreen(data = (state as MainScreenUiState.Success).data, modifier = modifier)
    }
    is MainScreenUiState.Error -> {
      Text("Error loading data: ${(state as MainScreenUiState.Error).throwable.message}")
    }
  }
}

@Composable
internal fun MainScreen(data: List<String>, modifier: Modifier = Modifier) {
  var currentDateTime by remember { mutableStateOf(LocalDateTime.now()) }

  LaunchedEffect(Unit) {
    while (true) {
      currentDateTime = LocalDateTime.now()
      delay(1000)
    }
  }

  val timeFormatter = remember { DateTimeFormatter.ofPattern("HH:mm:ss") }
  val dateFormatter = remember { DateTimeFormatter.ofPattern("yyyy-MM-dd") }
  val formattedTime = currentDateTime.format(timeFormatter)
  val formattedDate = currentDateTime.format(dateFormatter)

  Box(
    modifier = modifier.fillMaxSize().background(MaterialTheme.colorScheme.background),
    contentAlignment = Alignment.Center
  ) {
    Card(
      modifier = Modifier
        .width(320.dp)
        .wrapContentHeight(),
      colors = CardDefaults.cardColors(
        containerColor = MaterialTheme.colorScheme.surface
      ),
      border = BorderStroke(1.dp, MaterialTheme.colorScheme.outline),
      shape = RoundedCornerShape(8.dp)
    ) {
      Column {
        // Top window header bar
        Row(
          modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 12.dp, vertical = 8.dp),
          verticalAlignment = Alignment.CenterVertically,
          horizontalArrangement = Arrangement.SpaceBetween
        ) {
          Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
            Box(modifier = Modifier.size(6.dp).background(MaterialTheme.colorScheme.primary, shape = CircleShape))
            Box(modifier = Modifier.size(6.dp).background(MaterialTheme.colorScheme.outline, shape = CircleShape))
            Box(modifier = Modifier.size(6.dp).background(MaterialTheme.colorScheme.outline.copy(alpha = 0.5f), shape = CircleShape))
          }
          Text(
            text = "MONITOR: TIME_DAEMON",
            style = MaterialTheme.typography.labelLarge.copy(
              fontFamily = FontFamily.Monospace,
              fontWeight = FontWeight.Bold
            ),
            color = MaterialTheme.colorScheme.secondary
          )
        }

        HorizontalDivider(color = MaterialTheme.colorScheme.outline, thickness = 1.dp)

        // Time Display Area
        Box(
          modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 32.dp),
          contentAlignment = Alignment.Center
        ) {
          Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(
              text = formattedTime,
              style = MaterialTheme.typography.displayLarge,
              color = MaterialTheme.colorScheme.primary
            )
          }
        }

        HorizontalDivider(color = MaterialTheme.colorScheme.outline, thickness = 1.dp)

        // Bottom Telemetry Bar
        Column(
          modifier = Modifier
            .fillMaxWidth()
            .padding(12.dp),
          verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
          Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
          ) {
            Text(
              text = "TARGET",
              style = MaterialTheme.typography.labelLarge,
              color = MaterialTheme.colorScheme.outline
            )
            Text(
              text = data.firstOrNull()?.uppercase() ?: "NONE",
              style = MaterialTheme.typography.labelLarge.copy(fontFamily = FontFamily.Monospace),
              color = MaterialTheme.colorScheme.onBackground
            )
          }
          Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
          ) {
            Text(
              text = "DATE",
              style = MaterialTheme.typography.labelLarge,
              color = MaterialTheme.colorScheme.outline
            )
            Text(
              text = formattedDate,
              style = MaterialTheme.typography.labelLarge.copy(fontFamily = FontFamily.Monospace),
              color = MaterialTheme.colorScheme.onBackground
            )
          }
          Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
          ) {
            Text(
              text = "STATUS",
              style = MaterialTheme.typography.labelLarge,
              color = MaterialTheme.colorScheme.outline
            )
            Row(
              verticalAlignment = Alignment.CenterVertically,
              horizontalArrangement = Arrangement.spacedBy(6.dp)
            ) {
              Box(modifier = Modifier.size(6.dp).background(MaterialTheme.colorScheme.primary, shape = CircleShape))
              Text(
                text = "ONLINE",
                style = MaterialTheme.typography.labelLarge.copy(fontFamily = FontFamily.Monospace),
                color = MaterialTheme.colorScheme.primary
              )
            }
          }
        }
      }
    }
  }
}

@Preview(showBackground = true)
@Composable
fun MainScreenPreview() {
  AndroidCliTestTheme { MainScreen(listOf("Android")) }
}

@Preview(showBackground = true, widthDp = 340)
@Composable
fun MainScreenPortraitPreview() {
  AndroidCliTestTheme { MainScreen(listOf("Android")) }
}
