import { h, FunctionalComponent } from "@stencil/core"
import { DuetLocalizedText } from "./date-localization"
import { isEqual } from "./date-utils"

export type DatePickerDayProps = {
  focusedDay: Date
  today: Date
  day: Date
  inRange: boolean
  localization: DuetLocalizedText
  onDaySelect: (event: MouseEvent, day: Date) => void
  onKeyboardNavigation: (event: KeyboardEvent) => void
  focusedDayRef?: (element: HTMLButtonElement) => void
}

const formatOptions: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" }

export const DatePickerDay: FunctionalComponent<DatePickerDayProps> = ({
  focusedDay,
  today,
  day,
  onDaySelect,
  onKeyboardNavigation,
  focusedDayRef,
  inRange,
  localization,
}) => {
  const isToday = isEqual(day, today)
  const isFocused = isEqual(day, focusedDay)
  const isDisabled = day.getMonth() !== focusedDay.getMonth()
  const isOutsideRange = !inRange

  function handleClick(e) {
    onDaySelect(e, day)
  }

  return (
    <button
      class={{
        "duet-date__day": true,
        "is-outside": isOutsideRange,
        "is-disabled": isDisabled,
        "is-today": isToday,
      }}
      tabIndex={isFocused ? 0 : -1}
      onClick={handleClick}
      onKeyDown={onKeyboardNavigation}
      disabled={isOutsideRange || isDisabled}
      type="button"
      ref={el => {
        if (isFocused && el && focusedDayRef) {
          focusedDayRef(el)
        }
      }}
    >
      <span aria-hidden="true">{day.getDate()}</span>
      <span class="duet-date__vhidden">{day.toLocaleDateString(localization.locale, formatOptions)}</span>
    </button>
  )
}
