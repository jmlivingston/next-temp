import React from 'react'
import Head from 'next/head'
import { OPTIMIZELY_EXPERIMENTS } from '../utility/CONSTANTS'
import {
  OptimizelyProvider,
  OptimizelyExperiment,
  OptimizelyVariation,
} from './optimizely'
import OptimizelyTesterNested from './OptimizelyTesterNested'

const Optimizely = () => {
  return (
    <>
      <Head>
        <title>Optimizely</title>
        <script
          src={`https://cdn.optimizely.com/js/${process.env.NEXT_PUBLIC_OPTIMIZELY_SNIPPET_ID}.js`}></script>
      </Head>
      <OptimizelyProvider>
        <OptimizelyExperiment
          experiment={
            OPTIMIZELY_EXPERIMENTS[
              process.env.NEXT_PUBLIC_OPTIMIZELY_EXPERIMENT
            ].id
          }
          overrideVariation={
            OPTIMIZELY_EXPERIMENTS[
              process.env.NEXT_PUBLIC_OPTIMIZELY_EXPERIMENT
            ].variations[process.env.NEXT_PUBLIC_OPTIMIZELY_VARIATION3]
          }>
          <OptimizelyVariation
            experiment={
              OPTIMIZELY_EXPERIMENTS[
                process.env.NEXT_PUBLIC_OPTIMIZELY_EXPERIMENT
              ].id
            }
            variation={
              OPTIMIZELY_EXPERIMENTS[
                process.env.NEXT_PUBLIC_OPTIMIZELY_EXPERIMENT
              ].variations[process.env.NEXT_PUBLIC_OPTIMIZELY_VARIATION1].id
            }>
            Variation 0
          </OptimizelyVariation>
          <OptimizelyVariation
            experiment={
              OPTIMIZELY_EXPERIMENTS[
                process.env.NEXT_PUBLIC_OPTIMIZELY_EXPERIMENT
              ].id
            }
            variation={
              OPTIMIZELY_EXPERIMENTS[
                process.env.NEXT_PUBLIC_OPTIMIZELY_EXPERIMENT
              ].variations[process.env.NEXT_PUBLIC_OPTIMIZELY_VARIATION2].id
            }>
            Variation 1
          </OptimizelyVariation>
          <OptimizelyVariation
            experiment={
              OPTIMIZELY_EXPERIMENTS[
                process.env.NEXT_PUBLIC_OPTIMIZELY_EXPERIMENT
              ].id
            }
            variation={
              OPTIMIZELY_EXPERIMENTS[
                process.env.NEXT_PUBLIC_OPTIMIZELY_EXPERIMENT
              ].variations[process.env.NEXT_PUBLIC_OPTIMIZELY_VARIATION3].id
            }>
            Variation 2
          </OptimizelyVariation>
          <OptimizelyTesterNested />
        </OptimizelyExperiment>
      </OptimizelyProvider>
    </>
  )
}

export default Optimizely
