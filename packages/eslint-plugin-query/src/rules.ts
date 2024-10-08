import * as exhaustiveDeps from './rules/exhaustive-deps/exhaustive-deps.rule'
import * as stableQueryClient from './rules/stable-query-client/stable-query-client.rule'
import * as noRestDestructuring from './rules/no-rest-destructuring/no-rest-destructuring.rule'
import * as noUnstableDeps from './rules/no-unstable-deps/no-unstable-deps.rule'
import type { ESLintUtils } from '@typescript-eslint/utils'
import type { ExtraRuleDocs } from './types'

export const rules: Record<
  string,
  ESLintUtils.RuleModule<
    string,
    ReadonlyArray<unknown>,
    ExtraRuleDocs,
    ESLintUtils.RuleListener
  >
> = {
  [exhaustiveDeps.name]: exhaustiveDeps.rule,
  [stableQueryClient.name]: stableQueryClient.rule,
  [noRestDestructuring.name]: noRestDestructuring.rule,
  [noUnstableDeps.name]: noUnstableDeps.rule,
}
