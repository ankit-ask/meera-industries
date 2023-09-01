import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  userInput = 'B';
  lastA1Predicton = '';
  actualOutcomes: any[] = [];
  predictions: any[] = [];
  patterns: any[] = [];
  nextOutcome: any;
  token = 0;
  attackTokens = [2, 3, 4, 5, 6, 8];
  retrenchTokens = [4, 6, 10, 16, 26, 40, 60];
  tokenStrategy = '';
  accumulatedWinLoss = 0;
  tokenHistory: any = [];
  tokenIndex = 0;
  consecutiveCorrects = true;

  startGame() {
    // Prediction for A-1
    if (this.userInput === 'B') {
      this.nextOutcome = 'P';
    } else if (this.userInput === 'P') {
      this.nextOutcome = 'B';
    }

    this.actualOutcomes = [];

    this.predictions = ['-'];
    this.patterns = ['-'];
    this.actualOutcomes.push(this.userInput);

    this.predictions.push(this.nextOutcome);
    this.patterns.push('A1');

    this.tokenHistory = [];

    this.token = 2;
    // this.tokenIndex++;
    // this.accumulatedWinLoss += this.token;
    this.tokenHistory.push(this.token);
    this.tokenStrategy = 'ATTACK';
    // --------
    this.lastA1Predicton = this.nextOutcome;
  }

  setInput(value: any) {
    if (this.token) {
      this.actualOutcomes.push(value);
      this.predictNextOutcome();
    } else {
      alert('Please click on start to start the prediction!');
    }
  }

  predictNextOutcome() {
    let actualOutcomesLength = this.actualOutcomes.length;
    let predictionLength = this.actualOutcomes.length;

    // console.log(actualOutcomesLength);

    let lastOutcome = this.actualOutcomes[actualOutcomesLength - 1];
    let lastprediction = this.predictions[predictionLength - 1];
    let lastPatternUsed = this.patterns[predictionLength - 1];
    // console.log('Last = ', lastOutcome);
    // console.log('Last Pattern = ', lastPatternUsed);

    // if (actualOutcomesLength === 2) {
    // }

    // Prediction for "A1"
    if (lastPatternUsed === 'A1') {
      if (lastprediction === lastOutcome) {
        if (lastOutcome === 'P') {
          this.nextOutcome = 'B';
        } else if (lastOutcome === 'B') {
          this.nextOutcome = 'P';
        }
        this.patterns.push('A1');
      } else {
        // Continuing the same wager if we lose
        this.nextOutcome = lastprediction;
        this.patterns.push('A2');
      }
    }

    // Prediction for "A2"
    else if (lastPatternUsed === 'A2') {
      if (lastprediction === lastOutcome) {
        // Reverting back to "A1"
        this.patterns.push('A1');
        this.nextOutcome = lastOutcome;
        // --------
        this.lastA1Predicton = lastOutcome;
      } else {
        // Switching to template "B1"
        this.patterns.push('B1');
        // Handle "B" templates here..
        this.nextOutcome = lastOutcome;
      }
    }
    // Prediction for "B1"
    else if (lastPatternUsed === 'B1') {
      if (lastprediction === lastOutcome) {
        //Correct case

        // Two consecutive Corrects in "B Template"
        if (
          this.predictions[predictionLength - 2] ===
          this.actualOutcomes[actualOutcomesLength - 2]
        ) {
          this.patterns.push('A1');
          // --------
          this.lastA1Predicton = lastOutcome;

          if (lastOutcome === 'P') {
            this.nextOutcome = 'B';
          } else if (lastOutcome === 'B') {
            this.nextOutcome = 'P';
          }
        }
        // Single Correct in "B Template"
        else {
          this.patterns.push('A1');
          // this.nextOutcome = lastprediction;
          this.nextOutcome = this.lastA1Predicton;

          // TODO: Hero, we need to use the last A1 Prediction instead of lastPrediction
        }
      } else {
        this.patterns.push('B2');
        this.nextOutcome = lastprediction;
      }
    }

    // Prediction for "B2"
    else if (lastPatternUsed === 'B2') {
      if (lastprediction === lastOutcome) {
        //Correct case

        // Two consecutive Corrects in "B Template"
        if (
          this.predictions[predictionLength - 2] ===
          this.actualOutcomes[actualOutcomesLength - 2]
        ) {
          this.patterns.push('A1');
          if (lastOutcome === 'P') {
            this.nextOutcome = 'B';
          } else if (lastOutcome === 'B') {
            this.nextOutcome = 'P';
          }
        }
        // Single Correct in "B Template"
        else {
          this.patterns.push('B1');
          this.nextOutcome = lastprediction;
        }
      } else {
        this.patterns.push('B3');
        this.nextOutcome = lastprediction;
      }
    }

    // Prediction for "B3"
    else if (lastPatternUsed === 'B3') {
      if (lastprediction === lastOutcome) {
        //Correct case
        this.patterns.push('B2');
      } else {
        this.patterns.push('A1');
      }
      this.nextOutcome = lastOutcome;
    }

    // console.log('Next Outcome =', this.nextOutcome);
    this.predictions.push(this.nextOutcome);

    // BEGINS - Setting the token value
    // For Correct cases
    if (lastprediction === lastOutcome) {
      this.accumulatedWinLoss += this.token;

      if (this.tokenStrategy === 'RETRENCH') {
        // If we are correct at initial retrench
        if (this.tokenIndex === 0) {
          this.tokenStrategy = 'ATTACK';
          this.tokenIndex = 0;
          this.token = this.attackTokens[this.tokenIndex];
        } else {
          // Two Consecutive Corrects in "RETRENCH"
          if (
            this.predictions[predictionLength - 2] ===
              this.actualOutcomes[actualOutcomesLength - 2] &&
            this.consecutiveCorrects
          ) {
            this.consecutiveCorrects = false;
            if (this.tokenIndex > 1) {
              this.tokenIndex -= 2;
              this.token = this.retrenchTokens[this.tokenIndex];
            } else {
              this.tokenStrategy = 'ATTACK';
              this.tokenIndex = 0;
              this.token = this.attackTokens[this.tokenIndex];
            }
          } else {
            this.consecutiveCorrects = true;
            if (this.tokenIndex > 0) {
              this.tokenIndex--;
            }
            this.token = this.retrenchTokens[this.tokenIndex];
          }
        }
      } else {
        if (this.tokenIndex < 5) {
          this.tokenIndex++;
        }
        this.token = this.attackTokens[this.tokenIndex];
      }

      console.log('Token Index = ', this.tokenIndex);
    }

    // For Incorrect cases
    else {
      this.accumulatedWinLoss -= this.token;

      if (this.tokenStrategy === 'ATTACK') {
        this.tokenStrategy = 'RETRENCH';
        this.tokenIndex = 0;
        this.token = this.retrenchTokens[this.tokenIndex];
      } else {
        // Reset to initital retrench if accumulated tokens are below -150
        if (this.accumulatedWinLoss <= -150 && this.tokenIndex > 5) {
          this.tokenIndex = -1;
        }
        if (this.tokenIndex < 6) {
          this.tokenIndex++;
        }
        this.token = this.retrenchTokens[this.tokenIndex];
      }
    }

    this.tokenHistory.push(this.token);
    // ENDS - Setting the token value
  }
  reset() {
    this.actualOutcomes = [];
    this.predictions = [];
    this.nextOutcome = null;
    this.token = 0;
    this.tokenHistory = [];
    this.accumulatedWinLoss = 0;
    // console.log(this.actualOutcomes);
  }
}
