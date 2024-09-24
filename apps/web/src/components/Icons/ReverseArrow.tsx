import { ComponentProps } from 'react'

/**
 * @deprecated use ui/src/icons instead
 */
export const ReverseArrow = (props: ComponentProps<'svg'>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.05836 6.27468C2.00086 6.21718 1.95514 6.14789 1.92348 6.07123C1.86014 5.91873 1.86014 5.74623 1.92348 5.59373C1.95514 5.51706 2.00086 5.44798 2.05836 5.39048L5.3917 2.05715C5.63586 1.81298 6.03173 1.81298 6.27589 2.05715C6.52006 2.30132 6.52006 2.69718 6.27589 2.94134L4.00925 5.20799H14.1667C14.5117 5.20799 14.7917 5.48799 14.7917 5.83299C14.7917 6.17799 14.5117 6.45799 14.1667 6.45799H4.00925L6.27589 8.72463C6.52006 8.9688 6.52006 9.36466 6.27589 9.60882C6.15423 9.73049 5.9942 9.79213 5.8342 9.79213C5.6742 9.79213 5.51418 9.73132 5.39251 9.60882L2.05836 6.27468ZM18.0766 13.9271C18.045 13.8504 17.9992 13.7813 17.9417 13.7238L14.6084 10.3905C14.3642 10.1463 13.9684 10.1463 13.7242 10.3905C13.4801 10.6346 13.4801 11.0305 13.7242 11.2747L15.9909 13.5413H5.83339C5.48839 13.5413 5.20839 13.8213 5.20839 14.1663C5.20839 14.5113 5.48839 14.7913 5.83339 14.7913H15.9909L13.7242 17.058C13.4801 17.3021 13.4801 17.698 13.7242 17.9422C13.8459 18.0638 14.0059 18.1255 14.1659 18.1255C14.3259 18.1255 14.4859 18.0647 14.6076 17.9422L17.9409 14.6088C17.9984 14.5513 18.0442 14.4822 18.0758 14.4056C18.14 14.2522 18.14 14.0804 18.0766 13.9271Z"
      fill={props.fill}
    />
  </svg>
)
