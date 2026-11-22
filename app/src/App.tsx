import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'
import { PlantsProvider } from './store/plantsStore'
import { isOnboardingCompleted } from './store/onboarding'
import { Onboarding } from './screens/Onboarding'
import { Collection } from './screens/Collection'
import { AddPlant } from './screens/AddPlant'
import { PlantDetail } from './screens/PlantDetail'
import { WateringGuide } from './screens/WateringGuide'
import { PlantSheet } from './screens/PlantSheet'

function Root() {
  return <Navigate to={isOnboardingCompleted() ? '/collection' : '/onboarding'} replace />
}

function App() {
  return (
    <PlantsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/add" element={<AddPlant />} />
          <Route path="/plant/:id" element={<PlantDetail />} />
          <Route path="/plant/:id/guide" element={<WateringGuide />} />
          <Route path="/plant/:id/sheet" element={<PlantSheet />} />
          <Route path="*" element={<Root />} />
        </Routes>
      </BrowserRouter>
    </PlantsProvider>
  )
}

export default App
