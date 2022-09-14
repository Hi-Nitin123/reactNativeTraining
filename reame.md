AssignmentDay3

Q.1)Execution process of react native code.

Ans)

1. At the first start of the app, the main thread starts execution and starts loading JS bundles.

2. When JavaScript code has been loaded successfully, the main thread sends it to another JS thread because when JS does some heavy calculations stuff the thread for a while, the UI thread will not suffer at all any time.

3. When React start rendering Reconciler starts “diffing”, and when it generates a new virtual DOM(layout) it sends changes to another thread(Shadow thread).

4. Shadow thread calculates layout and then sends layout parameters/objects to the main(UI) thread. ( Here you may wonder why we call it “shadow”? It’s because it generates shadow nodes )

5. Since only the main thread is able to render something on the screen, shadow thread should send generated layout to the main thread, and only then UI renders.

Q.2)Which is better for react native app - Javascript vs typescript?

Ans.)With all these advantages and disadvantages, Typescript still provides great value to your project. You will save many hours of debugging time by using TypeScript. Therefore, you should definitely use TypeScript in your React Native Project.

Q.3)Can I do native changes in case of expo?

Ans.)You can do whatever you want in the Xcode and Android Studio projects.
To add third-party native modules for React Native, non-Expo-specific instructions such as react-native link should be supported

Q.4)Can we convert a react expo app to react native CLI?

Ans.)Following are the steps to convert a react expo app to react native CLI

1.)Install exp using npm i -g expo

2.)And then used expo eject to detach the project

Q.5)What are the limitations of react native expo?

Ans.)Following are the limitations of react native expo

1.)Many device APIs are supported (check out the "SDK API Reference" in the sidebar), but not all iOS and Android APIs are available yet

2.)If you need to keep your app size lean then react native expo may not be the best choice.

3.)The only supported third party push notifictaion service is the expo notifiction service

4.) Free build can sometimes be queued.

5.)Configuration must be done on each native project rather than once with app.json
