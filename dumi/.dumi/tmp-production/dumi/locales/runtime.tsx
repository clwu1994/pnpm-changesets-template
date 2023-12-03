// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { history } from 'dumi'
import React, { useState, useLayoutEffect, useCallback, type ReactNode } from 'react'
import {
  RawIntlProvider,
  createIntl,
  createIntlCache
} from '/Users/wuchanglong/Documents/workspace/study/pnpm-changesets-template/node_modules/.pnpm/react-intl@6.5.5_react@18.1.0_typescript@5.3.2/node_modules/react-intl'
import { useIsomorphicLayoutEffect } from '/Users/wuchanglong/Documents/workspace/study/pnpm-changesets-template/node_modules/.pnpm/dumi@2.2.14_@babel+core@7.23.5_@types+node@18.19.1_eslint@8.55.0_jest@29.7.0_prettier@3.1.0_r_ind2erg6c4t65dilxjypvc6y5y/node_modules/dumi/dist/client/theme-api/utils.js'
import { locales, messages } from './config'

const cache = createIntlCache()

const LocalesContainer: FC<{ children: ReactNode }> = props => {
  const getIntl = useCallback(() => {
    const base = ''
    const matched = locales
      .slice()
      .reverse()
      .find(locale =>
        'suffix' in locale
          ? // suffix mode
            history.location.pathname.replace(/([^/])\/$/, '$1').endsWith(locale.suffix)
          : // base mode
            history.location.pathname.replace(/([^/])\/$/, '$1').startsWith(base + locale.base)
      )
    let locale = matched ? matched.id : locales[0].id
    // using query on demos
    if (history.location.pathname.startsWith(base + '/~demos')) {
      const params = new URLSearchParams(history.location.search)
      // match the locale of the query
      if (params.get('locale')) {
        locale = params.get('locale')
      }
    }
    const localeMessages = messages[locale] || {}

    // append internal message, for use intl as string template util
    localeMessages['$internal.edit.link'] = undefined

    return createIntl({ locale, messages: localeMessages }, cache)
  }, [])
  const [intl, setIntl] = useState(() => getIntl())

  useIsomorphicLayoutEffect(() => {
    return history.listen(() => {
      setIntl(getIntl())
    })
  }, [])

  return (
    <RawIntlProvider value={intl} key={intl.locale}>
      {props.children}
    </RawIntlProvider>
  )
}

export function i18nProvider(container: Element) {
  return React.createElement(LocalesContainer, null, container)
}
