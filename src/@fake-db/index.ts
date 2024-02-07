import mock from './mock'

import './auth/jwt'
import './auth/jwt1'

mock.onAny().passThrough()
