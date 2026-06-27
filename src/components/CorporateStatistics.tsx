'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

const CorporateStatistics = () => {
  const { t } = useTranslation()
  const [counts, setCounts] = useState({
    transactions: 0,
    users: 0,
    revenue: 0,
    satisfaction: 0,
  })

  const finalCounts = {
    transactions: 125000,
    users: 85000,
    revenue: 2450000000, // 2.45 billion CDF
    satisfaction: 98,
  }

  useEffect(() => {
    // Animate counters when component mounts
    const duration = 2000 // ms
    const steps = 60
    const stepDuration = duration / steps

    const timers = Object.keys(finalCounts).map((key) => {
      const increment = finalCounts[key as keyof typeof finalCounts] / steps
      let current = 0
      let step = 0

      return setInterval(() => {
        if (step < steps) {
          current += increment
          setCounts((prev) => ({
            ...prev,
            [key]: Math.min(Math.floor(current), finalCounts[key as keyof typeof finalCounts]),
          }))
          step++
        } else {
          clearInterval(timers[Object.keys(finalCounts).indexOf(key)])
        }
      }, stepDuration)
    })

    return () => {
      timers.forEach((timer) => clearInterval(timer))
    }
  }, [])

  const formatNumber = (num: number): string => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B'
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  const stats = [
    {
      value: counts.transactions,
      label: t('stats-transactions'),
      prefix: '',
      suffix: '+',
    },
    {
      value: counts.users,
      label: t('stats-users'),
      prefix: '',
      suffix: '+',
    },
    {
      value: counts.revenue,
      label: t('stats-revenue'),
      prefix: 'CDF ',
      suffix: '+',
    },
    {
      value: counts.satisfaction,
      label: t('stats-satisfaction'),
      prefix: '',
      suffix: '%',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-primary-blue to-secondary-blue text-white">
      <div className="container-corporate">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">{t('stats-title')}</h2>
          <p className="section-subtitle text-blue-100">
            {t('stats-subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.prefix}
                {formatNumber(stat.value)}
                {stat.suffix}
              </div>
              <div className="text-xl text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CorporateStatistics