type MonthsNames = [string, string, string, string, string, string, string, string, string, string, string, string]
type DayNames = [string, string, string, string, string, string, string]

export type DuetLocalizedText = {
  buttonLabel: string
  placeholder: string
  selectedDateMessage: string
  prevMonthLabel: string
  nextMonthLabel: string
  monthSelectLabel: string
  yearSelectLabel: string
  closeLabel: string
  calendarHeading: string
  dayNames: DayNames
  monthNames: MonthsNames
  monthNamesShort: MonthsNames
  locale: string | string[]
}

const localization: DuetLocalizedText = {
  buttonLabel: "Choisir une date",
  placeholder: "JJ/MM/AAAA",
  selectedDateMessage: "Selected date is",
  prevMonthLabel: "Previous month",
  nextMonthLabel: "Next month",
  monthSelectLabel: "Month",
  yearSelectLabel: "Year",
  closeLabel: "Close window",
  calendarHeading: "Choose a date",
  dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ],
  monthNamesShort: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  locale: "fr-FR",
}

export default localization
