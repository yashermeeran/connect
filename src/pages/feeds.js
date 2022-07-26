import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@components/layout'
import { USER_LOGIN_STATUS } from '@constants/app'

import Feed from '@components/feed'

const FeedsPage = () => {
  const router = useRouter()
  const [shouldShowFeedsPage, setShouldShowFeedsPage] = useState(false)
  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem(USER_LOGIN_STATUS)

    if (!isUserLoggedIn) {
      router.push('/')
    } else {
      setShouldShowFeedsPage(true)
    }
  }, [])

  if (!shouldShowFeedsPage) {
    return null
  }

  return (
    <Layout>
      <Feed />
    </Layout>
  )
}

export default FeedsPage
