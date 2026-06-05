package com.facesecure.ml

import android.content.Context
import android.graphics.BitmapFactory
import com.google.mediapipe.tasks.core.BaseOptions
import com.google.mediapipe.tasks.vision.core.RunningMode
import com.google.mediapipe.tasks.vision.facedetector.FaceDetector
import com.google.mediapipe.tasks.vision.facedetector.FaceDetectorResult
import com.google.mediapipe.framework.image.BitmapImageBuilder

class FaceDetectorHelper(private val context: Context) {

    private val detector: FaceDetector

    init {
        val baseOptions = BaseOptions.builder()
            .setModelAssetPath("face_detection_short_range.tflite")
            .build()

        val options =
            FaceDetector.FaceDetectorOptions.builder()
                .setBaseOptions(baseOptions)
                .setRunningMode(RunningMode.IMAGE)
                .setMinDetectionConfidence(0.5f)
                .build()

        detector = FaceDetector.createFromOptions(context, options)
    }

    fun detect(imagePath: String): FaceDetectorResult? {

        val bitmap = BitmapFactory.decodeFile(imagePath)
            ?: return null

        val mpImage =
            BitmapImageBuilder(bitmap).build()

        return detector.detect(mpImage)
    }
}