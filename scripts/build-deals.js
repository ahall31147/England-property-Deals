#!/usr/bin/env node
/**
 * build-deals.js
 * ----------------------------------------------------------------------
 * Pulls REAL, FREE, official property sale data from HM Land Registry's
 * Price Paid Data (no API key, no signup, Open Government Licence) and
 * turns it into a deals.json file that the website reads.
 *
 * Data source (official, updated monthly by HM Land Registry):
 *   https://www.gov.uk/government/statistical-data-sets/price-paid-data-downloads
 *
 * What this script does:
 *   1. Downloads the current year's Price Paid Data CSV (~9MB, no key needed).
 *   2. Filters transactions down to our target England towns/cities.
 *   3. Works out, per town:
 *        - refurb candidates: recent sales priced well below the local
 *          median for houses (not flats) — classic "needs work" signal.
 *        - BTL candidates: a representative recent sale + estimated
 *          yield using the indicative rent table below.
 *        - HMO candidates: larger houses (priced above the local median)
 *          suited to room-by-room letting, with an estimated yield.
 *   4
