module.exports = ({ title, date, slug, author, amend }) => `---
title: "${title}"
date: ${date}
slug: "/${slug}"
author: "${author}"
amend: "${amend}"
pullRequest: ""
---
## Context

Provide reasons and context of this ADR.

## Decision

Provide the decision taken by the team.

## Consequences

Provide consequences and side effect of the decision.
`;
