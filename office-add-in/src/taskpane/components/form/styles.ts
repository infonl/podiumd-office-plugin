/*
 * SPDX-FileCopyrightText: 2025 INFO.nl
 * SPDX-License-Identifier: EUPL-1.2+
 */

import { makeStyles, tokens } from "@fluentui/react-components";

export const formStyles = makeStyles({
  input: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    flexGrow: 1,
  },
  error: {
    color: tokens.colorStatusDangerForeground1,
  },
});
