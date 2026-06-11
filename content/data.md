---
title: "FOIA Data Report"
date: 2021-12-18T11:10:36+08:00
draft: false
language: en
description: FOIA Data Summary
# featured_image: ../assets/images/featured/featured-img-placeholder.png
---
## FOIA Data Report

[Download as PDF](/SLP-Flock-Data-Export-Summary.pdf)

### SLP-PD Flock Safety Database - Audit Findings
* **Source:** St. Louis Park MN PD Flock Safety audit records, Jan 2025 - Apr 2026
* **File types:** Audit (SLP-PD's own searches) + Network-Audit (outside agencies searching SLP-PD's camera network)
* **Prepared:** May 2026
* **FOIA Link:** [MuckRock FOIA Request](https://www.muckrock.com/foi/minnesota-156/slp-pd-flock-safety-audit-207260/)
* **SLP ALPR Policy:** [St. Louis Park ALPR Policy Document](https://www.stlouisparkmn.gov/home/showpublisheddocument/28047/638681458304130000)
* **SLP Flock Portal:** [Flock Safety Transparency Portal](https://transparency.flocksafety.com/saint-louis-park-mn-pd)
* **Flagged Searches:** [Google Spreadsheet Document](https://docs.google.com/spreadsheets/d/1N0mutoSio-TcxUIMJMAUKBVUhpV2463KV6Wues7mLpg/edit?usp=sharing)

---

## Executive Summary
The data reveals three distinct eras: 
1. **A national-access period (Jan-May 2025):** Hundreds of agencies from across the country—many explicitly assisting ICE, HSI, and CBP—searched St. Louis Park's Flock camera network.
2. **An abrupt restriction (around June 2025):** Network access was cut by ~97%.
3. **A post-restriction period:** Immigration searches don't disappear; instead, they go quiet on paper.

### Key Structural Findings
* **MOCIC Presence:** MOCIC, a multi-state fusion center, was the only consistently non-MN entity retained after the restriction. It had explicitly conducted immigration enforcement searches before the restriction cut-off, and continued operating at high volume afterward with no immigration labels.
* **System Bug Exploitation:** A Missouri drug task force searched SLP-PD's cameras for an "ICE detainer" in October 2025—months after the supposed restriction. Flock Safety issued an internal moderation note about a software bug that enabled agencies without access to SLP's cameras to still search the data.
* **SLP-PD Internal Usage:** St. Louis Park PD itself conducted zero searches listing "immigration" or similar reasons across all 16 months of Audit records. The primary findings concern how outside entities use SLP's cameras and data, not how SLP-PD utilizes them.

---

## Scale Overview

| Month | Network rows | Immigr. searches | Notes |
| :--- | :--- | :--- | :--- |
| **Jan 2025** | 333,245 | 119 | National access; agencies from 15+ states |
| **Feb 2025** | 346,955 | 198 | Deportation warrants spike |
| **Mar 2025** | 399,335 | 377 | Banks County GA: 89 searches; MOCIC does "Immigration Inv" |
| **Apr 2025** | 386,650 | 768 | West Chicago IL PD: 458 searches in one month |
| **May 2025** | 248,481 | 228 | US Border Patrol [Inactive] account still running searches |
| **Jun 2025** | 7,380 | 1 | ~97% access restriction kicks in |
| **Jul 2025** | 7,344 | 3 | St. Paul PD: "HSI Stolen" (HSI-adjacent) |
| **Aug 2025** | 7,003 | 0 | |
| **Sep 2025** | 7,038 | 0 | |
| **Oct 2025** | 7,832 | 2 | MO drug task force: "ICE detainer" + Flock bug note |
| **Nov 2025** | 8,450 | 0 | Dropdown era begins |
| **Dec 2025** | 7,723 | 0 | |
| **Jan 2026** | 7,372 | 11 | Mille Lacs SO: 10 immigration searches |
| **Feb 2026** | 6,605 | 1 | Crow Wing SO |
| **Mar 2026** | (no file) | | immigration search |
| **Apr 2026** | 5,671 | 0 | MOCIC drops to 0 |

---

## Key Patterns for Council Attention

### 1. MOCIC: The Persistent Outsider
MOCIC (Mid-States Organized Crime Information Center) was the only entity that survived the June 2025 restriction and continued accessing SLP-PD's cameras through February 2026. Before the restriction, MOCIC ran "Immigration Inv" (March) and "IMMIGRATION VIOLATION" (June) searches. After the restriction, it continued at high volume (372-818 searches/month) with no immigration labels. Whether MOCIC was retained by design or by oversight is not clear from the data. Notably, MOCIC's member states include Missouri—the same state whose drug task force accessed the network in October 2025 for an ICE detainer.

### 2. The Dropout Doesn't Mean Dropout
Immigration searches went from 768 in April to 1 in June—but the total network searches also dropped 97%. The proportion of immigration searches within what remained is harder to assess, and after the dropdown change, the specifics are obscured entirely. The right question isn't *"did immigration searches stop?"* but *"can we still tell what's happening?"*

### 3. West Chicago IL PD: 458 Searches in One Month
One Illinois city ran 458 searches using "HSI" as the reason in April 2025. This is the equivalent of one out-of-state police department checking SLP-PD's camera network roughly 15 times per day, every day of the month, for immigration enforcement purposes. No case number was recorded on most entries.

### 4. Mille Lacs County After the Dropdown
Before the dropdown, agencies named their reasons: "ICE WARRANT," "Deportation Warrant," "Immigration Violation." After the dropdown, Mille Lacs County ran 10 immigration searches in January 2026 with blank detail fields. The dropdown replaced transparency with categories. Crow Wing County's February entry at least wrote "HSI" in the text field—confirming a federal connection—but that's the exception.

### 5. The Deactivated Border Patrol Account
A [Federal] US Border Patrol [Inactive] account ran 4 searches in May 2025. A deactivated account should not be able to run searches. This is an access-control failure, not a policy choice.

### 6. Flock Safety's Own Bug Disclosure
On October 31, 2025, Flock Safety's own system triggered unauthorized searches by a Missouri drug task force and then documented the error in the audit log. The moderation note is significant: it confirms (a) searches happened that shouldn't have, (b) the intended scope was already outside MN-only parameters, and (c) Flock was self-monitoring but disclosed it only in the audit record, not proactively to SLP-PD.

---

## SLP-PD's Own Searches
St. Louis Park PD's Audit files contain zero immigration-related searches from Jan 2025 to Apr 2026. SLP-PD does not appear to be using Flock for immigration enforcement. The concern is what SLP-PD's infrastructure is being used for by others. SLP has the accomplice liability of facilitating others to do what they cannot; in other words, the city remains responsible for helping others do things it is restricted from doing.

---

## Timeline by Month

### January 2025
*National access, ICE warrants from Day 1.* 119 immigration-related searches by 26 agencies across 15+ states.

| Agency | State | Searches | Reason |
| :--- | :--- | :--- | :--- |
| Butler Township PD | OH | 19 | "HSI-Drug Lead", "HSI-Labor Trafficking" |
| Banks County SO | GA | 17 | "HSI" |
| Warren PD | MI | 12 | "HSI", "HSI 3500" |
| Palos Heights PD | IL | 9 | "Immigration violation" |
| Terrebonne Parish SO | LA | 7 | "LSP HSI HPD" |
| Michigan State Police | MI | 5 | "CBP Assist", "Assist CBP Investigation" |
| Texas DPS | TX | 5 | "Assist HSI" |
| Charleston County SO | SC | 6 | "HSI" |
| East Providence PD | RI | 5 | "HSI narcs" |
| Oklahoma City PD | OK | 3 | "ICE WARRANT" |
| Missouri State Highway Patrol | MO | 2 | "ICE warrant" |
| Miami-Dade SO | FL | 2 | "Customs & Border Patrol" |
| Mesa AZ PD | AZ | 1 | "Immigration Violation" |
| Hennepin County SO | MN | 2 | "HSI - Assistance Exigent" local MN agency, emergency-flagged |

* **Notable Activity:** Hennepin County ran 2 searches on Jan 31 flagged as "exigent" for HSI. Oklahoma City PD ran ICE warrant searches on January 7—the day after Trump's inauguration, the same week DHS announced mass deportation operations. 
* **MOCIC Overall Activity:** Active this month with 1,199 searches, listing reasons including case numbers, fraud, and child pornography.

### February 2025
*Deportation warrants surge; drug/immigration combos appear.*
198 immigration-related searches by 35+ agencies.

| Agency | State | Searches | Reason |
| :--- | :--- | :--- | :--- |
| Attleboro PD | MA | 36 | "Drugs/immigration violations", "Immigration/Drugs" |
| Port Clinton PD | OH | 31 | "Immigration", "Immigration+" |
| Grand Rapids PD | MI | 22 | "Deportation Warrant" (continues through May) |
| Butler Township PD | OH | 20 | "HSI-Locate", "HSI-Labor Trafficking" |
| Banks County SO | GA | 9 | "HSI" |
| Bay County SO | FL | 4 | "SA Steve O'Brien/HSI" named HSI agent |
| NESPIN (New England fusion center) | ME | 4 | "HSI IRS" |
| Houston PD | TX | 4 | "HSI warrant atl" |
| Texas Dept. of Criminal Justice | TX | 3 | "Federal HSI Assist" |

* **Pattern Analysis:** Grand Rapids PD begins a multi-month run of "Deportation Warrant" searches (22 in Feb, 15 in Mar, 27 in May), suggesting an active deportation case tracked across months. "Drugs/immigration violations" reasons appear, combining immigration enforcement with drug investigations in a single search.
* **MOCIC Overall Activity:** 1,503 searches.

### March 2025
*Peak escalation; MOCIC does immigration search; fusion centers active.*
377 immigration-related searches—the first major peak.

| Agency | State | Searches | Reason |
| :--- | :--- | :--- | :--- |
| Banks County SO | GA | 89 | "HSI" - single agency, single month |
| Hanover Park PD | IL | 39 | "HSI Fraud Investigation", "HSI Narcotics Investigation" |
| Cartersville GA PD | GA | 28 | "HSI" |
| Florida Highway Patrol | FL | 26 | "HSI ASSIST", "ICE warrant" |
| Attleboro PD | MA | 17 | "Drugs/immigration violations" |
| Texas DPS | TX | 17 | "Immigration Status", "Assist HSI" |
| Lubbock County SO | TX | 16 | "HSI" |
| Grand Rapids PD | MI | 15 | "Deportation Warrant" |
| Fargo PD | ND | 9 | "HSI request - ongoing" |
| NYS Crime Analysis Center Network | NY | 7 | "Invest Support to HSI" NY state fusion center |
| Spencer County SO | IN | 5 | "Immigration Warrant" |
| Denver PD | CO | 5 | "Fugitive DEA and HSI" |
| MOCIC | MO/Midwest | 1 | "Immigration Inv" fusion center doing immigration |

* **Key Finding:** MOCIC (covering MO, IL, IN, IA, KS, KY, NE, ND, SD, and WI) runs one search labeled "Immigration Inv." After the June restriction, MOCIC becomes the only non-MN entity left on the network. 
* **Other Multi-Jurisdictional Activity:** Indiana HIDTA (High Intensity Drug Trafficking Area) appears: "4327157 Fraud/Conspiracy."
* **MOCIC Overall Activity:** 993 searches on other matters.

### April 2025
*Explosive peak; West Chicago runs 458 HSI searches in one month.*
768 immigration-related searches (all-time high).

| Agency | State | Searches | Reason |
| :--- | :--- | :--- | :--- |
| West Chicago PD | IL | 458 | "HSI", "HSI Investigation" |
| Florida Highway Patrol | FL | 52 | "ICE warrant", "HSI Bolo", "IMMIGRATION INVESTIGATION" |
| Gonzales PD | LA | 48 | "HSI Req" |
| Warren PD | MI | 40 | "HSI 3500" |
| Grand Rapids PD | MI | 27 | "Deportation Warrant" |
| Jacksonville SO | FL | 17 | "ICE HSI TARGET" |
| Butler Township PD | OH | 15 | "HSI-CMLO" |
| Pasco County SO | FL | 10 | "HSI Task Force Investigation (Stewart)" |
| Fargo PD | ND | 9 | "HSI request - ongoing" |
| Brownstown Twp PD | MI | 4 | "Immigration Enforcement (Border Patrol Assist - Agent Carlson)" |
| Eagan MN PD | MN | 1 | "Investigation HSI" MN agency, HSI-related |
| Pooler GA PD | GA | 1 | "sig 21 CBP" signal 21 + CBP reference |

* **Analysis:** West Chicago IL PD made up 60% of all immigration searches for the month. Running roughly 15 searches/day suggests an active, sustained HSI task force operation using SLP-PD's network as a lookout resource. Most entries had no case number.
* **Federal Overlap:** Florida Highway Patrol ran searches labeled "Secret Service Warrant C.I." alongside ICE and HSI searches, showing multiple federal lines intersecting.
* **MOCIC Overall Activity:** 799 searches.

### May 2025
*Final national-access month; US Border Patrol [Inactive] account searches.*
228 immigration-related searches.

| Agency | State | Searches | Reason |
| :--- | :--- | :--- | :--- |
| West Chicago PD | IL | 90 | "HSI" |
| Grand Rapids PD | MI | 41 | "Deportation Warrant" |
| Texas DPS | TX | 20 | "Immigration", "ICE warrant", "Immigration Enforcement" |
| Michigan State Police | MI | 11 | "USBP Immigration Investigation" Patrol collaboration |
| Bossier Parish SO | LA | 14 | "HSI" |
| [Federal] US Border Patrol [Inactive] | Federal | 4 | "T21 Case WV", "Border Fugitive" |

* **Key Finding (Deactivated Account):** The account `[Federal] US Border Patrol [Inactive]` ran 4 searches on May 9 and May 13, 2025. Because it was explicitly labeled inactive, this points to an access control or system termination failure by Flock Safety. The reasons listed ("T21 Case WV" = Title 21 federal narcotics case in WV; "Fugitive") show ongoing operations rather than a system test.
* **Intermediary Pattern:** Michigan State Police ran 11 searches labeled "USBP Immigration Investigation," acting as an intermediary for U.S. Border Patrol.
* **MOCIC Overall Activity:** 737 searches.

### June 2025
*The restriction; MOCIC does immigration search and becomes the only outsider.*
1 immigration-related search. Network rows drop dramatically from 248,481 to 7,380 (a 97% reduction). 

* **Remaining Access Pool:** National agencies vanished overnight, leaving mostly MN agencies and two adjacent Wisconsin border towns (River Falls WI PD, Saint Croix Falls WI PD).
* **The Exception:** The sole immigration search was executed by MOCIC for an **"IMMIGRATION VIOLATION."** MOCIC survived the restriction, remaining the only active non-MN entity.
* **MOCIC Overall Activity:** 372 searches (accounting for 5% of all remaining post-restriction activity).

### July - September 2025
*Quiet period; MOCIC maintains presence; St. Paul runs HSI search.*
Immigration searches: 3 (Jul), 0 (Aug), 0 (Sep).

* **July Action:** St. Paul MN PD ran 3 searches labeled "HSI Stolen"—not explicitly immigration, but HSI-adjacent (likely involving stolen property tied to an HSI case).
* **Out-of-State Monitoring:** MOCIC persisted as the sole non-MN entity:
  * **July:** 397 searches (burglary, vehicle theft, fraud)
  * **August:** 614 searches (forgery - many, fugitive locate)
  * **September:** 724 searches (theft, drugs, missing persons, fugitive)
* **Border Towns Drop:** River Falls WI PD and Saint Croix Falls WI PD completely dropped off the network after August.

### October 2025
*Missouri drug task force runs ICE detainer search; Flock bug disclosed.*
2 immigration-related searches.

* **Incident:** `North MO DTF Brookfield MO PD` | Reason: **ICE detainer** | Time: 10/31/2025 04:10 AM
* **Flock Safety System Bug:** Flock applied an internal moderation note to both entries: 
  > "An issue was identified that caused the system to initiate unprocessed search activity on a larger set of cameras than intended by the user. No footage or data from these devices was accessed or viewed. The underlying bug has been fixed, and additional safeguards have been implemented to prevent recurrence."
* **Implications:** 1. A Missouri drug task force initialized searches despite the June restriction.
  2. The search parameter was explicitly for immigration enforcement ("ICE detainer").
  3. The note implies a systemic failure where searches hit more cameras than authorized, and Flock only disclosed it in the audit record, not proactively to SLP-PD.
* **MOCIC Overall Activity:** 777 searches.

### November - December 2025
*Zero immigration searches; MOCIC steady.*
0 immigration searches recorded.

* **MOCIC Continuity:** Continued as the sole non-MN entity, running 517 searches in November (drugs, narcotics, missing) and 579 searches in December (fraud, hit-and-run).
* **Note on Tracking:** The lack of immigration searches reflects a change in reporting rather than an outright stoppage, as free-text reasoning fields were replaced shortly after.

### January 2026
*Dropdown era begins; immigration searches return in a new format; Mille Lacs runs 10.*
11 immigration-related searches. The reason field shifted to a structured dropdown format: `[Category] - [optional text]`.

| Agency | Searches | Reason |
| :--- | :--- | :--- |
| Mille Lacs County SO | 10 | "Immigration (civil/administrative) -" |
| Montevideo MN PD | 1 | "Immigration (criminal) -" |

* **The Dropdown Paradox:** Standardized dropdown categories replaced free-text entries (like "ICE WARRANT"). While it confirms immigration searches continue, the free-text space after the dash is almost always left blank, hiding specific intent. It is now impossible for city council members to determine if these are civil deportations or criminal investigations.
* **Mille Lacs Breakdown:** 10 searches in a single month is unusually high for a rural county (pop. ~26,000), suggesting an active immigration case or deep coordination with ICE/HSI.
* **MOCIC Peak:** Hit its highest post-restriction volume with 818 searches. Its reasons also shifted to categories (e.g., `"Counterfeiting/Forgery - money launder"`).

### February 2026
*MOCIC fades; one final immigration search.*
1 immigration search: Crow Wing County MN SO ran `"Immigration (civil/administrative) - HSI"`, explicitly confirming a federal Homeland Security Investigations connection in the text field.

* **MOCIC Drop-off:** MOCIC fell sharply from 818 to 38 searches due to an unknown policy shift, contract change, or organizational restructuring.

### March 2026
*No file provided for audit verification.*

### April 2026
*MOCIC gone; network normalizes.*
MOCIC recorded 0 searches, marking its first total absence since the dataset tracking began. Total network activity was 5,671 rows, limited completely to internal MN agencies.

---

## Other Searches of Note

| Agency | File Type | Date | Reason Entered | Flagged Systemic & Operational Concerns |
| :--- | :--- | :--- | :--- | :--- |
| **St. Louis Park MN PD** | Audit | Apr 2025 – ongoing | "Daytime search for best result" — **151 times** | Open surveillance sweeps conducted with no crime, case number, or suspect recorded. |
| **St. Louis Park MN PD** | Audit | Dec 2025 – Feb 2026 | "City Planning/Traffic Analysis" — **30 times** | Officers utilized a criminal surveillance database for municipal traffic planning, overlapping distinct administrative utilities. |
| **Minnetonka MN PD** | Network Audit | Mar–May 2025 | "**NOT PC, NOT WANTED** Vehicle involved in a jacket theft... Three black females..." | Flagged internally as lacking probable cause and wanted status, yet ran searches repeatedly using race as an identifier. |
| **Minnetonka MN PD** | Network Audit | Apr–May 2025 | "**NOT PC, NOT WANTED** ... Black male suspect." | Repeated instances of non-probable cause tracking over multiple weeks. |
| **Briarcliffe Acres SC PD** | Network Audit | Feb 2025 | "test my car" | Personal use of a law enforcement regional surveillance network. |
| **Shelbyville IN PD** | Network Audit | Jan 2025 | "my vehicle" | Personal verification/lookup of an officer's own vehicle. |
| **Delaware State Police** | Network Audit | Mar 2025 | "DxE Protest Suspect Vehicle / Capt. Windish" | Tracking vehicles belonging to an activist protest group (Direct Action Everywhere) using Minnesota infrastructure. |
| **Carrollton TX PD** | Network Audit | Feb 2025 | "2025 PROTEST" | Protest-related vehicle tracking without case details. |
| **Jersey Village TX PD** | Network Audit | May 2025 | "political signs" | Use of system for non-criminal, political tracking parameters. |
| **Pontotoc MS PD** | Network Audit | Mar 2025 | "Virginia Romanians Soliciting from churches" | Target profiling using a specific ethnic and geographic descriptor as the sole reason. |
| **Oklahoma City OK PD** | Network Audit | Jan 2025 | "asian burg" | Racial classification used as the primary search descriptor. |
| **Bloomington IL PD** | Network Audit | Jan 2025 | "Asian Burglary" | Same pattern of race-based demographic search profiling. |
| **Kentucky State PD** | Network Audit | Apr 2025 | "locating Chinese TBML" | Nationality used as the primary identifier in a Trade-Based Money Laundering search. |
| **Carbondale IL PD** | Network Audit | Feb 2025 | "Noah Hernandez Custody Dispute" | Tracking an individual for a civil family law dispute with no criminal nexus. |
| **Blount County TN SO** | Network Audit | Mar 2025 | "emergency custody", "child custody papers" | Running three separate network searches for civil family court matters. |
| **Mississippi Dept. of Public Safety** | Network Audit | Apr 2025 | "Extremist Activity" | Broad ideological label used with zero case numbers or specified crimes. |

---

## Methodology
* **Data Context:** Analysis based on 32 parsed CSV files (16 Audit + 16 Network-Audit logs).
* **Extraction Process:** Python script parsing utilizing specific targeted string arrays (`immigration`, `ICE`, `HSI`, `CBP`, `Border Patrol`, `deportation`). All metrics derived straight from original Flock Safety verification logs.