package com.facesecure.ml

import com.facebook.react.bridge.*

class FaceDetectorModule(
    private val reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "FaceDetector"

    @ReactMethod
    fun detectFace(imagePath: String, promise: Promise) {

        try {

            val detector =
                FaceDetectorHelper(reactContext)

            val result =
                detector.detect(imagePath)

            val faces =
                Arguments.createArray()

            result?.detections()?.forEach { detection ->

                val box =
                    detection.boundingBox()

                val map =
                    Arguments.createMap()

                map.putDouble("x", box.left.toDouble())
                map.putDouble("y", box.top.toDouble())
                map.putDouble("width", box.width().toDouble())
                map.putDouble("height", box.height().toDouble())

                faces.pushMap(map)
            }

            promise.resolve(faces)

        } catch (e: Exception) {
            promise.reject("FACE_ERROR", e)
        }
    }
}