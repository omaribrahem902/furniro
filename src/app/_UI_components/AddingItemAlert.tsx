import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

type AddingItemAlertProps = {
    title: string,
}

export function AddingItemAlert({title}:AddingItemAlertProps) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {title} was added to cart
      </AlertDescription>
    </Alert>
  )
}
