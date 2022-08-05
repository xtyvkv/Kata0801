import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})

  // This lab also contains code we worked on in class. Relevant lines to make Toni's life easier: 52-85

export class CounterComponent {
  public currentCount = 0;
  public title = "LuxTest";
  public names = [
    'Fred', 'Julie', 'Sam', 'Olivia', 'Adam', 'Jennifer'
  ];

  public runTestA() {
    let item1 = document.getElementById("item1");
    item1!.innerText = item1!.innerText + " Item 1 was modified."
  }

  public incrementCounter() {
    this.currentCount++;
    let usersName = prompt('Please enter your name');

    usersName = this.GetUsersName(8);


    if (usersName!.length > 15) {
      alert('User name ' + usersName + ' is too long.');
    }
    else {
      console.log("The user's name is: " + usersName);
      alert("The user's name is: " + usersName)
    }
  }

  public GetUsersName(minimumLength: number): string|null {
    let userName: string|null = "";
    while (userName!.length < minimumLength) {
      userName = prompt('Please enter your name');
      if (userName!.length == minimumLength) {
        // Nothing needed
      }
      else {
        alert('The name ' + userName + 'is too short. Please make it longer.')
      }
    }
    return userName;
  }

  public countries: Country[] = [
    { name: "Egpyt", officialLanguage: "Arabic", primaryColor: "red" },
    { name: "Mexico", officialLanguage: "Spanish", primaryColor: "green" },
    { name: "Brazil", officialLanguage: "Portugese", primaryColor: "blue" },
    { name: "Italy", officialLanguage: "Italian", primaryColor: "purple" },
    { name: "Netherlands", officialLanguage: "Dutch", primaryColor: "yellow" }
  ]

  public OnClickedChangeCountry() : void {
    let countryFromUser: string = prompt('Please enter the name of a country');
    let foundCountry: Country | null = null;
    for (let currCountry = 0; currCountry < this.countries.length; currCountry++) {
      if (countryFromUser == this.countries[currCountry].name) {
        foundCountry = this.countries[currCountry];
        break;
      }
    }
    let foundCountryName = document.getElementById("CountryName");
    foundCountryName!.innerText = foundCountry!.name;
    let foundCountryLanguage = document.getElementById("CountryOfficialLanguage");
    foundCountryLanguage!.innerText = foundCountry!.officialLanguage;

    let newColorString: string = "color: " + foundCountry!.primaryColor;
    foundCountryName!.setAttribute("style", newColorString);
    foundCountryLanguage!.setAttribute("style", newColorString);
  }

}

export class Country {
  public name: string = '';
  public officialLanguage: string = '';
  public primaryColor: string = '';
}
