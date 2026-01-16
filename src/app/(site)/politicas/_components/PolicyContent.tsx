"use client";

import styled from "@emotion/styled";

export const PolicyArticle = styled.article`
  width: 100%;

  &.legal-text {
    color: var(--color-fg);
  }

  h1 {
    font-family: var(--font-display);
    color: var(--color-dark);
    font-size: clamp(26px, 2.2vw, 34px);
    letter-spacing: -1px;
    line-height: 1.05;
  }

  .policy-updated {
    margin-top: 10px;
    color: var(--color-muted);
    font-family: var(--font-body);
    font-size: 14px;
  }

  .policy-lead {
    margin-top: 14px;
    color: var(--color-muted);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.55;
    max-width: 78ch;
  }

  .policy-note {
    margin-top: 16px;
    padding: 12px 14px;
    border: 1px solid color-mix(in oklab, var(--color-border), transparent 30%);
    border-radius: var(--radius-md);
    background: color-mix(in oklab, var(--color-gray-surface), transparent 35%);
    color: var(--color-fg);
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 1.5;
  }

  .policy-note strong {
    color: var(--color-dark);
    font-weight: 600;
  }

  .policy-toc {
    margin-top: 18px;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 6px;
  }

  .policy-toc a {
    color: var(--color-link);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .policy-section {
    margin-top: 28px;
  }

  .policy-section h2 {
    font-family: var(--font-display);
    color: var(--color-dark);
    font-size: 20px;
    letter-spacing: -0.5px;
    line-height: 1.15;
  }

  .policy-section h3 {
    margin-top: 14px;
    font-family: var(--font-body);
    color: var(--color-dark);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.2px;
    line-height: 1.25;
  }

  .policy-section p {
    margin-top: 10px;
    font-family: var(--font-body);
    color: var(--color-fg);
    font-size: 16px;
    line-height: 1.25;
    max-width: 88ch;
  }

  .policy-section ul {
    margin-top: 10px;
    padding-left: 18px;
    display: grid;
    gap: 8px;
    font-family: var(--font-body);
    color: var(--color-fg);
    font-size: 16px;
    line-height: 1.6;
    max-width: 88ch;
  }

  .policy-section li strong {
    color: var(--color-dark);
    font-weight: 600;
  }

  .policy-section code {
    font-family: var(--font-mono);
    font-size: 0.95em;
    padding: 0 6px;
    border-radius: 6px;
    background: color-mix(in oklab, var(--color-gray-surface), transparent 25%);
    border: 1px solid color-mix(in oklab, var(--color-border), transparent 30%);
  }

  .policy-divider {
    margin-top: 26px;
    border: none;
    border-top: 1px solid var(--color-border);
  }

  .policy-form {
    margin-top: 14px;
    display: grid;
    gap: 12px;
    max-width: 720px;
  }

  .policy-form .field {
    display: grid;
    gap: 6px;
  }

  .policy-form label {
    font-family: var(--font-body);
    font-size: 14px;
    color: var(--color-dark);
    font-weight: 600;
    letter-spacing: -0.2px;
  }

  .policy-form input,
  .policy-form select,
  .policy-form textarea {
    width: 100%;
    padding: 12px 12px;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background: var(--color-bg);
    color: var(--color-fg);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.25;
    outline: none;
  }

  .policy-form textarea {
    min-height: 120px;
    resize: vertical;
  }

  .policy-form input:focus,
  .policy-form select:focus,
  .policy-form textarea:focus {
    border-color: color-mix(in oklab, var(--color-link), var(--color-border) 40%);
    box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-link), transparent 82%);
  }

  .policy-form .actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: center;
  }

  .policy-form .hint {
    font-family: var(--font-body);
    color: var(--color-muted);
    font-size: 14px;
    line-height: 1.5;
    max-width: 88ch;
  }
`;
