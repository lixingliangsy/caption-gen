export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "CaptionGen",
  slug: "caption-gen",
  tagline: "Captions that fit the platform",
  description: "Give your product and pick a platform and vibe; get 5 ready-to-post captions with hashtags. For founders and creators posting consistently.",
  toolTitle: "Write captions",
  resultLabel: "Your captions",
  ctaLabel: "Generate captions",
  features: [
  "5 per run",
  "Platform-aware",
  "Hashtags included",
  "Copy-ready"
],
  inputs: [
  {
    "key": "product",
    "label": "Product / Brand",
    "type": "input",
    "placeholder": "e.g. TaskNinja"
  },
  {
    "key": "platform",
    "label": "Platform",
    "type": "select",
    "options": [
      "Instagram",
      "TikTok",
      "LinkedIn",
      "X"
    ]
  },
  {
    "key": "vibe",
    "label": "Vibe",
    "type": "select",
    "options": [
      "Funny",
      "Inspiring",
      "Professional",
      "Casual"
    ]
  }
] as InputField[],
  systemPrompt: "You are a social media copywriter. Given a product, platform and vibe, write 5 short captions with relevant hashtags, tuned to the platform.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "Unlimited"
  },
  {
    "tier": "Pro",
    "price": "$9/mo",
    "desc": "More variants, saves"
  },
  {
    "tier": "Team",
    "price": "$29/mo",
    "desc": "Brand voice, API"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const product = inputs['product'] || 'your product'
  const platform = inputs['platform'] || 'Instagram'
  const vibe = inputs['vibe'] || 'Casual'
  const caps = [
    'Meet ' + product + ' - the upgrade you did not know you needed. ' + vibe + ' vibes only.',
    'We built ' + product + ' so you can stop doing the boring part. ' + platform + ' debut.',
    '3 reasons ' + product + ' will save your week (thread below).',
    'Small team, big problem solved: ' + product + '.',
    'If you only try one new tool this month, make it ' + product + '.'
  ]
  const tags = '#' + product.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() + ' #buildinpublic #' + platform.toLowerCase()
  return 'CAPTIONS for ' + product + ' (' + platform + ' / ' + vibe + ')\n\n' + caps.map((c,i)=> (i+1)+'. '+c).join('\n') + '\n\n' + tags + '\n\n--- (Mock set. Add OPENAI_API_KEY for platform-native, on-trend captions.)'
}
}
