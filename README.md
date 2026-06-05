# FaceSecure

Offline facial authentication scaffold for the NHAI Hackathon 7.0 use case.

## What is in this scaffold

- React Native + TypeScript project layout
- Navigation shell with enrollment and authentication entry points
- Feature folders for liveness, face recognition, enrollment, and sync
- SQLite, encryption, AWS, and ML service abstractions
- Implementation plan in `docs/IMPLEMENTATION_PLAN.md`

## Next steps

1. Install the dependencies from `package.json`.
2. Add the native React Native iOS and Android project folders.
3. Replace the service stubs with BlazeFace, Face Mesh, and MobileFaceNet integrations.
4. Connect the SQLite repository to real encrypted persistence and sync.
