import * as yup from 'yup'
const lang = /^[A-Za-z]+$/

export const schema = yup.object().shape({
  q: yup
    .string()
    .required(' ')
    .trim()
    .matches(lang, 'All artworks are English named')
    .min(3, 'Minimum 3 symbols are required'),
})
