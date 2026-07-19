import { Player, Game, Event, Team } from "@/types";

export const teams: Team[] = [
  {
    id: 1,
    name: "Bravehearts Ladies",
    category: "Ladies",
    coach: "Coach M. Banda",
    description:
      "Powered by raw athleticism and strategic brilliance. The Ladies division represents the pinnacle of professional basketball in Malawi.",
  },
  {
    id: 2,
    name: "Bravehearts Men",
    category: "Men",
    coach: "Coach K. Phiri",
    description:
      "The senior elite squad. Defending champions with a legacy of discipline and dominance in the national league.",
  },
  {
    id: 3,
    name: "Bravehearts Girls",
    category: "Girls",
    coach: "Coach A. Mkandawire",
    description:
      "Rising stars of Malawian basketball. The Girls division combines talent development with competitive excellence.",
  },
  {
    id: 4,
    name: "Bravehearts Boys",
    category: "Boys",
    coach: "Coach J. Chanza",
    description:
      "Forging the next generation of Malawian champions. Raw energy, elite discipline, and the heart of a lion.",
  },
  {
    id: 5,
    name: "Bravehearts Youth",
    category: "Youth",
    coach: "Coach Ziba",
    description:
      "The future of Malawi basketball. Our Youth program focuses on fundamental skill acquisition, team camaraderie, and the elite mindset.",
  },
];

export const players: Player[] = [
  // Ladies
  {
    id: 1,
    fullName: "Tiwonge Nyirenda",
    jerseyNumber: 7,
    position: "PG",
    team: "Ladies",
    age: 24,
    height: 173,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoXq22ruyb_RpFc3S0Vyy_eTblJyySrersBvpmCM_ydUL4fGq2TrG-N_3WwuUvzRc0DQfXoqD8153W_MoCLnm3_7_O8RBWwZPI7Do_IDoRwo1l2FR3RPnL3194i5FZRMTVSJFqAW6yunsT95P_ZpFlB170Ap6D-gpCA0Ht6D14sIPaUJZ2qbZsNzav-AQP2FzIc16k_WWSwZeQK_QqUcyh1quUBq704Kvpu1mXg8gm1eJWzfCLuiMxfGDt11lkKmlWEr0k3ryrS3Y0",
    marketValue: 15000,
    points: 448,
    assists: 162,
    rebounds: 68,
    steals: 45,
    blocks: 12,
  },
  {
    id: 2,
    fullName: "Lumbani Banda",
    jerseyNumber: 15,
    position: "C",
    team: "Ladies",
    age: 26,
    height: 191,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4QOS7TB05YNyW-Rm72XM8_EVPxELOWEYsoh-XaIk3HezGP0JndWbU0OkLZZwNqH13kOyYGsxHUrpyJjn39l2t1GqZxGWJnyz9AgIqjtR9ViM8fwELD6UbGVaa8JfeWiC412Uvoq_n4W5BmHyRZ2G9E2-22ZFjI93wat-wv5nPX64dSep4DEYOVRTYgp4idMkqTEbmNLIXRIrf2Tcku3aIdsv2WYvMWdSgFOrVEB9NPg5TKvnWBC8o_AhZnA2Q83INNL_doIQgbjM2",
    marketValue: 18000,
    points: 284,
    assists: 42,
    rebounds: 284,
    steals: 28,
    blocks: 70,
  },
  {
    id: 3,
    fullName: "Zuwena Phiri",
    jerseyNumber: 23,
    position: "SF",
    team: "Ladies",
    age: 22,
    height: 178,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuARy3cmjW89Uq7w0lRAEPpdvpyyVssTSSsWZZcGDnAOH0ZLPsu8R5QjOI632MuldRywjjxRF0Y5zT-IW4RybzjohNUPpg9atS9p8z2t5kur9LtGfwqmhH9aBcI281z3tBSDDHgazkyPam6iEl3HaXrnOdNSmU-0tnAsH1aLHg8vOFpQO9RiUkXkzdwNxpG7eUPxMXtlkt5bnKG1gF99OA5_M0k8VybrqypKfJco4mkpRC9iimXt1RX7Y6eB43a7y1lt8AKLPaqNy3Rq",
    marketValue: 12000,
    points: 396,
    assists: 78,
    rebounds: 156,
    steals: 52,
    blocks: 24,
  },
  // Men
  {
    id: 4,
    fullName: "Kondwani Mwale",
    jerseyNumber: 10,
    position: "PG",
    team: "Men",
    age: 28,
    height: 183,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF4-tYOUmkX7maoUylW4DjbfoMo2d8i7ZENSrox7wOWOgjhjb8rcc-rr-WN6X-LlqIqPnUwwoxqt3I31RGBo-qp_30d-41PTgPKVIujiLZY4N-prwfpUqr6FAAThVqfexyhLw86VKGMHMf8PJUeWlHVv1sGVrAqPvm9FxMW4BkpC_DElJkf4MGcOmPoEH7ZxXFarMO4TqAqoL65m6K9sEIPKVZO4I6PGGX7fVOIPPgR5YdQLaKsbr5pdPAUqeU1b38rjeg2ChGSK_Z",
    marketValue: 25000,
    points: 520,
    assists: 198,
    rebounds: 82,
    steals: 64,
    blocks: 18,
  },
  {
    id: 5,
    fullName: "Chimwemwe Banda",
    jerseyNumber: 23,
    position: "C",
    team: "Men",
    age: 30,
    height: 208,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgub2iCdXn6mvqK475yixB_75xJGNHJgy8qUH5DKTObJU7dhEJLe38ka0qmL4d_UnBbf38RvW3rOr-5p4u1MtsNJYBsLMivU3Blr9sl_0SSAes9NJIN6WFYdJ2MtVSVOL0rklYBE4NwPMgSzcxvpa4B1gAJAcNE1hGSqw-Equwq7m3j6YLsRfEvg1-2NVg9x_88c2gktWOnz0uvChYcSFdVZ_mvZZFnBy8JJ0NqRbZecznJXBKSjucIjuHTXdOCQ9YaYB4H3dlUkIw",
    marketValue: 30000,
    points: 380,
    assists: 54,
    rebounds: 412,
    steals: 32,
    blocks: 96,
  },
  {
    id: 6,
    fullName: "Billy Kachale",
    jerseyNumber: 5,
    position: "SF",
    team: "Men",
    age: 25,
    height: 198,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAk7IS57cQ1DeWx1KdugeQmfpqcNMiwa0Tq-AkIn8EtEPcQrJGXFK4UxKOjXJrk-kt94jL8Xmx7Kk8-G6Bb4xEwBTbgTn1teJcnX3nVlYJmcFQePcy5vpB3DyWMP6O_SdkP7mx33v7FO3IdVkD6N3-RP3oyLCeJP-4bgBfMg0pY0CjpiPxB8_l9VibcVVmTdSYkhXlkoySuWin4PE4G2QnZPod6U5frHTimhoHn7VOSU3RMd8a9Cme1TvY4_zWjzz6_lb8wGGXN1Fy",
    marketValue: 20000,
    points: 412,
    assists: 88,
    rebounds: 196,
    steals: 56,
    blocks: 28,
  },
  // Girls
  {
    id: 7,
    fullName: "Chifundo Mwale",
    jerseyNumber: 4,
    position: "PG",
    team: "Girls",
    age: 17,
    height: 173,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEfbCrG4NJl1nt4kW2HLOS2mTLrSd-y7daFb5AgmkZoCeHYq1uFHHkyr-lExhSqu61fG7rEjv5lF93-gPj8_RS-r8v-JJ4cxzkHbp5dIdJokHctZyNjODjrP5taBdu0h1zxyCNUTQ6x-t0uMGoChao1YYhRBUhNSbaBsniBCzO7S8wmtUepbXSf654NVRzd_TRevd_xZGav1hk__AKSQ1iVr1JMsmSXFr6keHP9fZPlaDMMzVazrilde8-6LeGkD6So2-jEcMPSlU0",
    marketValue: 5000,
    points: 368,
    assists: 124,
    rebounds: 52,
    steals: 68,
    blocks: 8,
    year: "Junior",
    status: "Starter",
    threePointPct: 36.8,
    freeThrowPct: 85.2,
  },
  {
    id: 8,
    fullName: "Tionge Banda",
    jerseyNumber: 11,
    position: "SF",
    team: "Girls",
    age: 18,
    height: 183,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4M1rvL7w1noa0QWgEbUIRnfqB9umC4wEebd4xLVFkPp2HwO7L1QlEU4RIH6BcCi5gPMHSKkg7zgR43yLrrjERmMa1n-OZaQNsVcyi9GLqh4YjmNx8Yzmiw4o6_6k5lKAfzw9I4NGkfsYH8gPy5f9483jvTK210BxDnRaOEKsPc9HMY7r3I32uUtNBkK9kQcoS37fQzW_ogziPal1VoPI9X5ISVudq1R7KeJg0qxaRkYaGAWsZjG_v20bUO5HZ3OVdjAPAh88QA1vT",
    marketValue: 6000,
    points: 274,
    assists: 62,
    rebounds: 188,
    steals: 42,
    blocks: 32,
    year: "Senior",
    status: "Starter",
    threePointPct: 31.5,
    freeThrowPct: 78.9,
  },
  {
    id: 9,
    fullName: "Lumbani Phiri",
    jerseyNumber: 22,
    position: "SG",
    team: "Girls",
    age: 16,
    height: 175,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYhxVcTInvSc_11t312JRW-L0MYgTO2zLc-oN1kkE7PBfApJvHJMIO2uOARbeDxXRhLyjL0Y7UDObqNOsFWw4GkzmV54J2_BWdrgHH4JdqNrhAQVyIrDaHxjetA2FoKR70v-qrWKBo84WbAHg-rUpAnvA8BtdtccLTn6F9XPpmu3Jir4YHmaBmCUSpl0ReaAV7YpSG0rncR8sTj2kgnQ2IO0bZOpp1G39C7H0oRFCaK_pfBmgxC3Ecv7CqtRg8WeaVHtU3COLPoPDA",
    marketValue: 4000,
    points: 236,
    assists: 84,
    rebounds: 62,
    steals: 58,
    blocks: 14,
    year: "Sophomore",
    status: "Bench",
    threePointPct: 33.2,
    freeThrowPct: 80.5,
  },
  {
    id: 18,
    fullName: "Nelia Chirwa",
    jerseyNumber: 8,
    position: "C",
    team: "Girls",
    age: 18,
    height: 191,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4QOS7TB05YNyW-Rm72XM8_EVPxELOWEYsoh-XaIk3HezGP0JndWbU0OkLZZwNqH13kOyYGsxHUrpyJjn39l2t1GqZxGWJnyz9AgIqjtR9ViM8fwELD6UbGVaa8JfeWiC412Uvoq_n4W5BmHyRZ2G9E2-22ZFjI93wat-wv5nPX64dSep4DEYOVRTYgp4idMkqTEbmNLIXRIrf2Tcku3aIdsv2WYvMWdSgFOrVEB9NPg5TKvnWBC8o_AhZnA2Q83INNL_doIQgbjM2",
    marketValue: 7000,
    points: 258,
    assists: 36,
    rebounds: 296,
    steals: 24,
    blocks: 62,
    year: "Sophomore",
    status: "Starter",
    threePointPct: 24.0,
    freeThrowPct: 72.8,
  },
  // Boys
  {
    id: 10,
    fullName: "Chikondi Banda",
    jerseyNumber: 23,
    position: "PG",
    team: "Boys",
    age: 16,
    height: 185,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF4-tYOUmkX7maoUylW4DjbfoMo2d8i7ZENSrox7wOWOgjhjb8rcc-rr-WN6X-LlqIqPnUwwoxqt3I31RGBo-qp_30d-41PTgPKVIujiLZY4N-prwfpUqr6FAAThVqfexyhLw86VKGMHMf8PJUeWlHVv1sGVrAqPvm9FxMW4BkpC_DElJkf4MGcOmPoEH7ZxXFarMO4TqAqoL65m6K9sEIPKVZO4I6PGGX7fVOIPPgR5YdQLaKsbr5pdPAUqeU1b38rjeg2ChGSK_Z",
    marketValue: 8000,
    points: 294,
    assists: 108,
    rebounds: 68,
    steals: 52,
    blocks: 14,
    year: "Sophomore",
    status: "Starter",
    threePointPct: 38.5,
    freeThrowPct: 82.1,
  },
  {
    id: 11,
    fullName: "Tiyese Phiri",
    jerseyNumber: 5,
    position: "SF",
    team: "Boys",
    age: 17,
    height: 196,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgub2iCdXn6mvqK475yixB_75xJGNHJgy8qUH5DKTObJU7dhEJLe38ka0qmL4d_UnBbf38RvW3rOr-5p4u1MtsNJYBsLMivU3Blr9sl_0SSAes9NJIN6WFYdJ2MtVSVOL0rklYBE4NwPMgSzcxvpa4B1gAJAcNE1hGSqw-Equwq7m3j6YLsRfEvg1-2NVg9x_88c2gktWOnz0uvChYcSFdVZ_mvZZFnBy8JJ0NqRbZecznJXBKSjucIjuHTXdOCQ9YaYB4H3dlUkIw",
    marketValue: 7000,
    points: 212,
    assists: 54,
    rebounds: 134,
    steals: 38,
    blocks: 32,
    year: "Junior",
    status: "Starter",
    threePointPct: 34.2,
    freeThrowPct: 75.8,
  },
  {
    id: 12,
    fullName: "Mwai Kachale",
    jerseyNumber: 11,
    position: "C",
    team: "Boys",
    age: 18,
    height: 208,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAk7IS57cQ1DeWx1KdugeQmfpqcNMiwa0Tq-AkIn8EtEPcQrJGXFK4UxKOjXJrk-kt94jL8Xmx7Kk8-G6Bb4xEwBTbgTn1teJcnX3nVlYJmcFQePcy5vpB3DyWMP6O_SdkP7mx33v7FO3IdVkD6N3-RP3oyLCeJP-4bgBfMg0pY0CjpiPxB8_l9VibcVVmTdSYkhXlkoySuWin4PE4G2QnZPod6U5frHTimhoHn7VOSU3RMd8a9Cme1TvY4_zWjzz6_lb8wGGXN1Fy",
    marketValue: 9000,
    points: 188,
    assists: 32,
    rebounds: 200,
    steals: 24,
    blocks: 54,
    year: "Senior",
    status: "Starter",
    threePointPct: 28.5,
    freeThrowPct: 68.2,
  },
  {
    id: 16,
    fullName: "Kondwani Nyirenda",
    jerseyNumber: 45,
    position: "SG",
    team: "Boys",
    age: 17,
    height: 183,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF4-tYOUmkX7maoUylW4DjbfoMo2d8i7ZENSrox7wOWOgjhjb8rcc-rr-WN6X-LlqIqPnUwwoxqt3I31RGBo-qp_30d-41PTgPKVIujiLZY4N-prwfpUqr6FAAThVqfexyhLw86VKGMHMf8PJUeWlHVv1sGVrAqPvm9FxMW4BkpC_DElJkf4MGcOmPoEH7ZxXFarMO4TqAqoL65m6K9sEIPKVZO4I6PGGX7fVOIPPgR5YdQLaKsbr5pdPAUqeU1b38rjeg2ChGSK_Z",
    marketValue: 8500,
    points: 324,
    assists: 84,
    rebounds: 92,
    steals: 48,
    blocks: 18,
    year: "Sophomore",
    status: "Starter",
    threePointPct: 42.1,
    freeThrowPct: 88.5,
  },
  {
    id: 17,
    fullName: "Hope Chirwa",
    jerseyNumber: 2,
    position: "PF",
    team: "Boys",
    age: 16,
    height: 201,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgub2iCdXn6mvqK475yixB_75xJGNHJgy8qUH5DKTObJU7dhEJLe38ka0qmL4d_UnBbf38RvW3rOr-5p4u1MtsNJYBsLMivU3Blr9sl_0SSAes9NJIN6WFYdJ2MtVSVOL0rklYBE4NwPMgSzcxvpa4B1gAJAcNE1hGSqw-Equwq7m3j6YLsRfEvg1-2NVg9x_88c2gktWOnz0uvChYcSFdVZ_mvZZFnBy8JJ0NqRbZecznJXBKSjucIjuHTXdOCQ9YaYB4H3dlUkIw",
    marketValue: 6500,
    points: 156,
    assists: 28,
    rebounds: 142,
    steals: 22,
    blocks: 38,
    year: "Freshman",
    status: "Bench",
    threePointPct: 22.0,
    freeThrowPct: 71.5,
  },
  // Youth
  {
    id: 13,
    fullName: "Luka Banda",
    jerseyNumber: 8,
    position: "PG",
    team: "Youth",
    age: 13,
    height: 162,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq0IVqZCVjdqqFSYfuNLoWYfXvDimu4IDbBIQ67eB8LGb2CYuUHN7udoSP8xYBb8l8qLz4W3Uf295gu_qsd1lFj30g9c8SP8uTDsW8V_3dyElkOtLa16L22DbVKi1Z7GVZUj5YT8xHiQZrppBgaUS3sZq8z8QG6zQYYZX9XtLnhNKJ2UVis8J22e5CN_JAWmq0K_ac8NDomPRqqrwzjPAV8r-u7oMzp8pAWcbER7oTzA29uMLGLdBCONuvanDkWbKpIezWWkZ6qgAX",
    marketValue: 2000,
    points: 142,
    assists: 68,
    rebounds: 58,
    steals: 42,
    blocks: 8,
  },
  {
    id: 14,
    fullName: "Chimwemwe Phiri",
    jerseyNumber: 23,
    position: "SG",
    team: "Youth",
    age: 12,
    height: 158,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkoIisKUjqNHv7-fIUBF0AJxCjaOYk1n83O6uHeN2TJYD8Go8mMA9G3QicEXIO-fGysjjAHqnH9UKcj0SXxsdgYdVvwtcM-VrcGEsRPn1bF2V1Rw_5ZsC-Bsois_dwPSS9UuXZ7cFZUhgXi0FmPysJM9pT5UO5nAXUiBzKj4k513tCgipIMQ0VnRd0IR-jxsEhzywgYvHOdHT59_aNF5vFThUlWbdX3QzM-ZGsytA6VOJn1R8FLN2gjLG6yI0_-8Fn29pIhlG80QQb",
    marketValue: 1500,
    points: 185,
    assists: 42,
    rebounds: 32,
    steals: 56,
    blocks: 6,
  },
  {
    id: 15,
    fullName: "Blessings Mtika",
    jerseyNumber: 5,
    position: "C",
    team: "Youth",
    age: 14,
    height: 175,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU4YYo6FCX4eHLTbJBhszf9T-anBNCuV1NC5InW6qMZqFFJ-bxxct60kblO_wXXEVHfM1NyKsXuzABSpw9N2KGKxUEhIa1gRP8Y7LBn6Gv3VbrS6d1SaEUuw_ZzMRmhzusl3zf5yEc_Qt5QZGHahQGQWeGtL7SBEplQ_qmnTB0Lkz_XUnaxoTdrLwaA8oY2nTG005zim19cubuJxas8_-2BmULBLqfxTfCUvoGtrM2Nsx1KoGcduJzyoRRabBThetit87tC-MDRtTt",
    marketValue: 2500,
    points: 98,
    assists: 28,
    rebounds: 114,
    steals: 32,
    blocks: 24,
  },
];

export const games: Game[] = [
  {
    id: 1,
    opponent: "Tigers BC",
    gameDate: "2026-07-20T18:00:00",
    venue: "Lilongwe Community Centre",
    scoreFor: 84,
    scoreAgainst: 79,
    result: "WIN",
  },
  {
    id: 2,
    opponent: "Giants BC",
    gameDate: "2026-07-15T19:00:00",
    venue: "Blantyre Sports Hall",
    scoreFor: 72,
    scoreAgainst: 78,
    result: "LOSS",
  },
  {
    id: 3,
    opponent: "Phoenix Basketball",
    gameDate: "2026-07-10T17:00:00",
    venue: "Lilongwe Community Centre",
    scoreFor: 91,
    scoreAgainst: 68,
    result: "WIN",
  },
  {
    id: 4,
    opponent: "Mighty Warriors",
    gameDate: "2026-07-05T18:30:00",
    venue: "Mzuzu Arena",
    scoreFor: 88,
    scoreAgainst: 82,
    result: "WIN",
  },
  {
    id: 5,
    opponent: "City Bulls",
    gameDate: "2026-06-28T19:00:00",
    venue: "Lilongwe Community Centre",
    scoreFor: 76,
    scoreAgainst: 76,
    result: "DRAW",
  },
  {
    id: 6,
    opponent: "Blantyre Giants",
    gameDate: "2026-06-20T18:00:00",
    venue: "Blantyre Sports Hall",
    scoreFor: 95,
    scoreAgainst: 81,
    result: "WIN",
  },
];

export const events: Event[] = [
  {
    id: 1,
    title: "National Championship Finals",
    description:
      "Bravehearts defend their title against the best teams in Malawi. Come witness history in the making.",
    location: "Lilongwe Community Centre",
    eventDate: "2026-08-15T18:00:00",
    poster: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxroOf9bRB-HlVHLyXBWi7TddAp3FjvoNRwemib5QX5d4x-X_haQhf5HcNWJjP4VQXC-c8MtXzltvan2wgFp5bBQ-ftadAiuDxKEquvR61LfNPCoCLO9x-C30jGOLNiYh2TxWJch7V83x3Ml2hoEyZuQhluntqBm0NelnIXC25I7Z5-NMn4AMnhMCdWq4G8BEPeSO2NRyjXYmB9Zi2gz5MmceCH2ySx5sh6jjwSuT4AcQ67MTjMePYgjzVp3LvJ2jeY2cLjS9kQ9Lm",
  },
  {
    id: 2,
    title: "Youth Development Camp",
    description:
      "Two-week intensive training camp for aspiring young basketball players aged 10-16.",
    location: "Area 18 Sports Complex",
    eventDate: "2026-08-01T09:00:00",
    poster: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu3_QFsajDQ0KPmaihP7VvFuhSKcxVjRHym7vjhBlLpwAaPQ7EWHQZO9VV7OJbQqsl5q1MfiqFEPxCGv7D55An1S1CBkbFgHrl67caWzdgHcwC_zaS7bmdPTJzpSGUVt9rI3hvJEfo6fAahzFjOL4Brx6Wz6ES1dfsoq0R7RNMy88PlFVFylwQnoLdM7Y3_QEI8wrscuP_WScw0lgYz6g5XPOXyZXCw1k9ZXV1AW1jUYJ1VdSEAbnXWtyDt-CdXcTK_W8A_ASSX3Bn",
  },
  {
    id: 3,
    title: "Community Basketball Clinic",
    description:
      "Free weekend basketball clinic for kids in Area 18. All skill levels welcome.",
    location: "Area 18 Open Court",
    eventDate: "2026-07-26T08:00:00",
    poster: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvr1t-kll6bFAu9ii8GGDM_WZ8El3VlRCbf-ZFnguQ9mw-AX5Ek6dd46hDeh6DNcYi2xvyXtyTZ_h82wDIvXLDKGX5SZ5fvDkCxB-eZuvEJyvtTexTqHaY_Rc84or_LMsHcXycAkbRNp9df_7obPSnTHzUE_QMK3nsnQoqR5kcQN3UDQgm_CehEs7tn4iBaRRA1FmvwI7XKGesUhMgyOuHK2t3O6Ii2xYdPYivDhJUGyO5Cd9VdTaadCq8A7MXv1iTZQksFeKbyOm-",
  },
  {
    id: 4,
    title: "Season Opening Gala",
    description:
      "Join us for the official 2026 season launch event. Meet the players, coaches, and staff.",
    location: "Continental Hotel Lilongwe",
    eventDate: "2026-09-01T19:00:00",
    poster: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvr1t-kll6bFAu9ii8GGDM_WZ8El3VlRCbf-ZFnguQ9mw-AX5Ek6dd46hDeh6DNcYi2xvyXtyTZ_h82wDIvXLDKGX5SZ5fvDkCxB-eZuvEJyvtTexTqHaY_Rc84or_LMsHcXycAkbRNp9df_7obPSnTHzUE_QMK3nsnQoqR5kcQN3UDQgm_CehEs7tn4iBaRRA1FmvwI7XKGesUhMgyOuHK2t3O6Ii2xYdPYivDhJUGyO5Cd9VdTaadCq8A7MXv1iTZQksFeKbyOm-",
  },
];

export function getPlayersByTeam(team: string): Player[] {
  return players.filter(
    (p) => p.team.toLowerCase() === team.toLowerCase()
  );
}

export function getPlayerById(id: number): Player | undefined {
  return players.find((p) => p.id === id);
}

export function getTeamByCategory(category: string): Team | undefined {
  return teams.find((t) => t.category.toLowerCase() === category.toLowerCase());
}

export function getUpcomingGames(): Game[] {
  const now = new Date();
  return games
    .filter((g) => new Date(g.gameDate) > now)
    .sort(
      (a, b) =>
        new Date(a.gameDate).getTime() - new Date(b.gameDate).getTime()
    );
}

export function getRecentGames(): Game[] {
  const now = new Date();
  return games
    .filter((g) => new Date(g.gameDate) <= now)
    .sort(
      (a, b) =>
        new Date(b.gameDate).getTime() - new Date(a.gameDate).getTime()
    );
}

export function getWinRate(): number {
  const total = games.length;
  const wins = games.filter((g) => g.result === "WIN").length;
  return Math.round((wins / total) * 100);
}

export function getTotalPlayers(): number {
  return players.length;
}

export function getPlayersByTeamCount(team: string): number {
  return players.filter(
    (p) => p.team.toLowerCase() === team.toLowerCase()
  ).length;
}

export function getTeamMetrics(team: string) {
  const teamPlayers = getPlayersByTeam(team);
  const totalPoints = teamPlayers.reduce((sum, p) => sum + p.points, 0);
  const totalRebounds = teamPlayers.reduce((sum, p) => sum + p.rebounds, 0);
  const totalAssists = teamPlayers.reduce((sum, p) => sum + p.assists, 0);
  const gamesPlayed = 20;

  return {
    pointsPerGame: (totalPoints / gamesPlayed).toFixed(1),
    teamRebounds: (totalRebounds / gamesPlayed).toFixed(1),
    avgAssistRate: (totalAssists / gamesPlayed).toFixed(1),
  };
}

export function getTrainingStats(team: string) {
  const stats: Record<string, { winRate: number; trainingHours: number; totalPoints: number; offensiveRating: number; defensiveRating: number }> = {
    ladies: { winRate: 88, trainingHours: 480, totalPoints: 1420, offensiveRating: 112.4, defensiveRating: 94.8 },
    men: { winRate: 85, trainingHours: 520, totalPoints: 1380, offensiveRating: 108.6, defensiveRating: 96.2 },
    girls: { winRate: 82, trainingHours: 360, totalPoints: 1180, offensiveRating: 102.3, defensiveRating: 98.5 },
    boys: { winRate: 80, trainingHours: 340, totalPoints: 1120, offensiveRating: 98.7, defensiveRating: 101.2 },
    youth: { winRate: 75, trainingHours: 280, totalPoints: 960, offensiveRating: 92.4, defensiveRating: 104.8 },
  };
  return stats[team.toLowerCase()] || stats.youth;
}
