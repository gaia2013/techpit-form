import { Address } from './address'
import { Career } from './career'
import { College } from './college'
import { Gender } from './gender'

export type Profile = {
  name: string
  description: string
  birthday: string
  gender: Gender
  address: Address
  college: College
  careers: Career[]
}
