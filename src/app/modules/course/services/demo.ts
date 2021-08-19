import {Lesson, Video} from "./lesson";

function arrayRandElement(arr: string[]) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}


const sss: Video[] = []
for (let i = 0; i < 39; i++) {
  sss.push({id: i.toString(), src: arrayRandElement(['http://static.videogular.com/assets/videos/videogular.mp4', 'http://techslides.com/demos/sample-videos/small.mp4', 'http://mirrors.standaloneinstaller.com/video-sample/page18-movie-4.mp4', 'http://mirrors.standaloneinstaller.com/video-sample/lion-sample.mp4']), type: 'video/mp4'})
}

export const videos: Video[] = sss

export const lessons: Lesson[] = [
  {
    "id": "0",
    "title": "1. Exploring the User Interface",
    "duration": "8:25",
    "trial": "1",
    "markers": [
      {
        "time": "56",
        "text": "Launching Final Cut Pro"
      },
      {
        "time": "98",
        "text": "Final Cut Pro X Workflow"
      },
      {
        "time": "141",
        "text": "The Libraries Pane"
      },
      {
        "time": "259",
        "text": "The Toolbar"
      },
      {
        "time": "323",
        "text": "The Media Browsers"
      },
      {
        "time": "333",
        "text": "Customizing the UI"
      },
      {
        "time": "413",
        "text": "Revealing Tool Tips"
      },
      {
        "time": "422",
        "text": "Exploring User Preferences"
      }
    ]
  },
  {
    "id": "1",
    "title": "2. Commanding the Keyboard",
    "duration": "7:54",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Using Shortcuts with Modifier Keys"
      },
      {
        "time": "77",
        "text": "Locating Keyboard Commands"
      },
      {
        "time": "187",
        "text": "Filtering the Virtual Keyboard"
      },
      {
        "time": "286",
        "text": "Customizing the Keyboard"
      },
      {
        "time": "408",
        "text": "Using Command Search & Help"
      }
    ]
  },
  {
    "id": "2",
    "title": "3. Working with Libraries",
    "duration": "7:17",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Understanding Library Hierarchy"
      },
      {
        "time": "46",
        "text": "Creating a Library Workflow"
      },
      {
        "time": "157",
        "text": "Opening Pre-Existing Libraries"
      },
      {
        "time": "274",
        "text": "Closing Libraries"
      },
      {
        "time": "313",
        "text": "Locating Your Libraries"
      },
      {
        "time": "350",
        "text": "Storing and Opening Backups"
      },
      {
        "time": "401",
        "text": "Opening Libraries at Launch"
      }
    ]
  },
  {
    "id": "3",
    "title": "4. Choosing a Media Storage Location",
    "duration": "12:50",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Creating a Library"
      },
      {
        "time": "48",
        "text": "Assigning a Storage Location"
      },
      {
        "time": "326",
        "text": "Navigating the Media Import Window"
      },
      {
        "time": "534",
        "text": "Choosing Media Storage Options"
      },
      {
        "time": "593",
        "text": "Copying Files to the Library"
      },
      {
        "time": "627",
        "text": "Leaving Files in Place"
      }
    ]
  },
  {
    "id": "4",
    "title": "5. Importing Media from Cameras",
    "duration": "13:48",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Importing from Cameras"
      },
      {
        "time": "81",
        "text": "Importing from a Camera Archive"
      },
      {
        "time": "207",
        "text": "Customizing the Metadata List"
      },
      {
        "time": "243",
        "text": "Importing Single or Multiple Clips"
      },
      {
        "time": "303",
        "text": "Importing Selection Ranges"
      },
      {
        "time": "488",
        "text": "Transcoding During Import"
      },
      {
        "time": "632",
        "text": "Checking Analysis Options"
      },
      {
        "time": "702",
        "text": "Creating Camera Archives"
      }
    ]
  },
  {
    "id": "5",
    "title": "6. Importing Media from Hard Drives",
    "duration": "10:31",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Reasons for Importing from a Hard Drive"
      },
      {
        "time": "126",
        "text": "Importing Folders as Keyword Collections"
      },
      {
        "time": "196",
        "text": "Analyzing Video During Import"
      },
      {
        "time": "240",
        "text": "Analyzing for People"
      },
      {
        "time": "297",
        "text": "Analyzing Audio During Import"
      },
      {
        "time": "395",
        "text": "Viewing Keyword Collections & People Smart Collections"
      },
      {
        "time": "522",
        "text": "Importing by Drag & Drop"
      }
    ]
  },
  {
    "id": "6",
    "title": "7. Working with Events",
    "duration": "10:35",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Understanding Events"
      },
      {
        "time": "141",
        "text": "Creating Events"
      },
      {
        "time": "204",
        "text": "Moving & Copying Media Between Events"
      },
      {
        "time": "269",
        "text": "Deleting Media in Events"
      },
      {
        "time": "341",
        "text": "Deleting Events"
      },
      {
        "time": "377",
        "text": "Viewing Clips as a Filmstrip"
      },
      {
        "time": "451",
        "text": "Enabling Continuous Playback"
      },
      {
        "time": "484",
        "text": "Viewing Clips as a List"
      },
      {
        "time": "563",
        "text": "Using the Task Menu"
      }
    ]
  },
  {
    "id": "7",
    "title": "8. Keywords & Smart Collections",
    "duration": "13:52",
    "trial": "0",
    "markers": [
      {
        "time": "67",
        "text": "Setting up the UI for Organizing"
      },
      {
        "time": "123",
        "text": "Saving a Custom Workspace"
      },
      {
        "time": "164",
        "text": "Identifying Clips with Keywords"
      },
      {
        "time": "220",
        "text": "Creating a Keyword Collection"
      },
      {
        "time": "265",
        "text": "Drag & Dropping Clips to a Keyword Collection"
      },
      {
        "time": "306",
        "text": "Removing Clips from a Keyword Collection"
      },
      {
        "time": "369",
        "text": "Assigning Frequently Used Keywords"
      },
      {
        "time": "452",
        "text": "Viewing and Adding Keywords with the Skimmer"
      },
      {
        "time": "498",
        "text": "Searching for Clips"
      },
      {
        "time": "518",
        "text": "Using the Filter HUD"
      },
      {
        "time": "574",
        "text": "Performing Keyword Searches"
      },
      {
        "time": "659",
        "text": "Creating Custom Smart Collections"
      }
    ]
  },
  {
    "id": "8",
    "title": "9. Rating & Transcoding Media",
    "duration": "8:03",
    "trial": "0",
    "markers": [
      {
        "time": "20",
        "text": "Rating Clips as Rejects"
      },
      {
        "time": "50",
        "text": "Un-Rating Clips"
      },
      {
        "time": "69",
        "text": "Rating & Viewing Clips as Favorites"
      },
      {
        "time": "128",
        "text": "Assigning Keywords to Ranges"
      },
      {
        "time": "344",
        "text": "Transcoding Media"
      }
    ]
  },
  {
    "id": "9",
    "title": "10. Setting up a Project",
    "duration": "4:42",
    "trial": "0",
    "markers": [
      {
        "time": "29",
        "text": "Creating a New Project"
      },
      {
        "time": "56",
        "text": "Choosing Project Properties"
      },
      {
        "time": "157",
        "text": "Locating Projects"
      }
    ]
  },
  {
    "id": "10",
    "title": "11. Building a Project",
    "duration": "16:57",
    "trial": "0",
    "markers": [
      {
        "time": "34",
        "text": "Making Selections & Playing Clips in the Browser"
      },
      {
        "time": "238",
        "text": "Marking Ranges on the Fly"
      },
      {
        "time": "284",
        "text": "Renaming Clips in the Browser"
      },
      {
        "time": "320",
        "text": "Creating a Selection Range"
      },
      {
        "time": "361",
        "text": "Dragging Clips into the Timeline"
      },
      {
        "time": "441",
        "text": "Introducing the Editing Buttons"
      },
      {
        "time": "474",
        "text": "Appending Clips to the Primary Storyline"
      },
      {
        "time": "601",
        "text": "Inserting Clips to the Primary Storyline"
      },
      {
        "time": "695",
        "text": "Navigating in the Timeline"
      },
      {
        "time": "779",
        "text": "The Skimmer vs. the Playhead"
      },
      {
        "time": "935",
        "text": "Reordering Clips in the Timeline"
      }
    ]
  },
  {
    "id": "11",
    "title": "12. Synchronizing Clips & Rating Interviews",
    "duration": "7:46",
    "trial": "0",
    "markers": [
      {
        "time": "34",
        "text": "Reasons for Syncing Video & Audio"
      },
      {
        "time": "143",
        "text": "Creating a Synchronized Clip Smart Collection"
      },
      {
        "time": "183",
        "text": "Changing the Audio Playback Channel"
      },
      {
        "time": "304",
        "text": "Rating Interviews"
      },
      {
        "time": "356",
        "text": "Creating a Favorites Smart Collection"
      },
      {
        "time": "440",
        "text": "Adding Favorites to the Project"
      }
    ]
  },
  {
    "id": "12",
    "title": "13. Performing Insert, Overwrite & Connect Edits",
    "duration": "15:20",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Introduction"
      },
      {
        "time": "127",
        "text": "Inserting a Clip Using the Playhead"
      },
      {
        "time": "196",
        "text": "Inserting a Clip Using the Skimmer"
      },
      {
        "time": "241",
        "text": "Performing an Overwrite Edit"
      },
      {
        "time": "314",
        "text": "Inserting Multiple Clips into the Timeline"
      },
      {
        "time": "388",
        "text": "Understanding Storylines"
      },
      {
        "time": "480",
        "text": "Performing a Connect Edit"
      },
      {
        "time": "625",
        "text": "Understanding the Magnetic Timeline"
      },
      {
        "time": "713",
        "text": "Performing a Video-Only Connect Edit"
      },
      {
        "time": "798",
        "text": "Making a Trim"
      },
      {
        "time": "859",
        "text": "Nudging and Disabling a Connected Clip"
      }
    ]
  },
  {
    "id": "13",
    "title": "14.  Removing Unwanted Material",
    "duration": "9:32",
    "trial": "0",
    "markers": [
      {
        "time": "32",
        "text": "Locating Clips with the Timeline Index"
      },
      {
        "time": "116",
        "text": "Removing Unwanted Material Using the Range Selection Tool"
      },
      {
        "time": "272",
        "text": "Removing Unwanted Material Using Keyboard Shortcuts"
      },
      {
        "time": "340",
        "text": "Enabling & Disabling Clip Snapping"
      },
      {
        "time": "387",
        "text": "Performing Blade Trims"
      },
      {
        "time": "465",
        "text": "Performing Playhead and Skimmer Trims"
      },
      {
        "time": "539",
        "text": "Using Trim to Selection"
      }
    ]
  },
  {
    "id": "14",
    "title": "15. Replacing Clips & 3 - Point Edits",
    "duration": "6:42",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Performing a Replace Edit"
      },
      {
        "time": "216",
        "text": "Performing a 3-Point Edit"
      },
      {
        "time": "325",
        "text": "Creating a Back-Timed 3-Point Edit"
      }
    ]
  },
  {
    "id": "15",
    "title": "16. Adjusting Clip Timing",
    "duration": "7:24",
    "trial": "0",
    "markers": [
      {
        "time": "41",
        "text": "Trimming Defined"
      },
      {
        "time": "61",
        "text": "Trimming with the Selection Tool"
      },
      {
        "time": "123",
        "text": "Trimming with the Keyboard"
      },
      {
        "time": "223",
        "text": "Creating Split Edits"
      },
      {
        "time": "362",
        "text": "Flattening a Clip to the Primary Storyline"
      }
    ]
  },
  {
    "id": "16",
    "title": "17. Auditioning Clips",
    "duration": "4:19",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Introduction"
      },
      {
        "time": "61",
        "text": "Creating a Selection Range to Audition"
      },
      {
        "time": "109",
        "text": "Changing the Audition Pick"
      },
      {
        "time": "138",
        "text": "Add to Audition vs. Replace and Add to Audition"
      },
      {
        "time": "208",
        "text": "Previewing the Audition Clip"
      }
    ]
  },
  {
    "id": "17",
    "title": "18. Using the Trimming Tools",
    "duration": "11:40",
    "trial": "0",
    "markers": [
      {
        "time": "90",
        "text": "Working with the Trim Tool"
      },
      {
        "time": "171",
        "text": "Performing a Ripple Edit with Snapping"
      },
      {
        "time": "289",
        "text": "Performing a Rolling Edit"
      },
      {
        "time": "351",
        "text": "Performing a Slip Edit"
      },
      {
        "time": "478",
        "text": "Performing a Slide Edit"
      },
      {
        "time": "567",
        "text": "Trimming with the Precision Editor"
      }
    ]
  },
  {
    "id": "18",
    "title": "19. Multicam Editing",
    "duration": "9:22",
    "trial": "0",
    "markers": [
      {
        "time": "34",
        "text": "Creating a Multicam Clip"
      },
      {
        "time": "151",
        "text": "Viewing Angles in a Multicam Clip"
      },
      {
        "time": "238",
        "text": "Enabling Video Only Switching"
      },
      {
        "time": "341",
        "text": "Performing a Multicam Edit in the Timeline"
      },
      {
        "time": "402",
        "text": "Switching Angles without Making Cuts"
      },
      {
        "time": "427",
        "text": "Multicam Editing with the Keyboard"
      },
      {
        "time": "494",
        "text": "Making Adjustments to the Edit"
      }
    ]
  },
  {
    "id": "19",
    "title": "20. Working with Storylines",
    "duration": "7:34",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "The Advantage of Storylines"
      },
      {
        "time": "75",
        "text": "Understanding Gap Clips"
      },
      {
        "time": "204",
        "text": "Performing Extract and Lift Edits"
      },
      {
        "time": "286",
        "text": "Using the Position Tool"
      },
      {
        "time": "389",
        "text": "Replacing Gap Clips"
      }
    ]
  },
  {
    "id": "20",
    "title": "21. Working with Connected Storylines",
    "duration": "7:00",
    "trial": "0",
    "markers": [
      {
        "time": "34",
        "text": "Final Cut Pro X's Editing Paradigm"
      },
      {
        "time": "130",
        "text": "Understanding Secondary Storylines"
      },
      {
        "time": "224",
        "text": "Re-ordering & Trimming Clips in a Connected Storyline"
      },
      {
        "time": "271",
        "text": "Disabling Clips in a Secondary Storyline"
      },
      {
        "time": "313",
        "text": "Changing Storyline Timing with a Gap Clip"
      }
    ]
  },
  {
    "id": "21",
    "title": "22. Editing the Soundtrack",
    "duration": "11:57",
    "trial": "0",
    "markers": [
      {
        "time": "35",
        "text": "Duplicating a Project"
      },
      {
        "time": "91",
        "text": "Setting up the Project for Sound Editing"
      },
      {
        "time": "211",
        "text": "Disabling & Detaching Audio"
      },
      {
        "time": "269",
        "text": "Changing Clip Volume"
      },
      {
        "time": "350",
        "text": "Understanding Audio Delivery Requirements"
      },
      {
        "time": "452",
        "text": "Soloing Clips"
      },
      {
        "time": "499",
        "text": "Creating Fades"
      },
      {
        "time": "533",
        "text": "Changing the Fade Type"
      },
      {
        "time": "621",
        "text": "Copying & Pasting Volume Effects"
      }
    ]
  },
  {
    "id": "22",
    "title": "23. Working with Music",
    "duration": "12:55",
    "trial": "0",
    "markers": [
      {
        "time": "58",
        "text": "Introducing Audio Roles"
      },
      {
        "time": "123",
        "text": "Adjusting Music Loudness"
      },
      {
        "time": "190",
        "text": "Using Music Beat Markers for Cutting"
      },
      {
        "time": "336",
        "text": "Controlling the Volume of a Clip Over Time"
      },
      {
        "time": "474",
        "text": "Adjusting Audio Keyframes"
      },
      {
        "time": "554",
        "text": "Copying and Pasting Keyframes"
      },
      {
        "time": "620",
        "text": "Making Timing Refinements"
      }
    ]
  },
  {
    "id": "23",
    "title": "24. Refining the Edit",
    "duration": "6:03",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Becoming a Final Cut Pro"
      },
      {
        "time": "118",
        "text": "Replace & Retime to Fit"
      },
      {
        "time": "204",
        "text": "Tightening Up the Pacing"
      },
      {
        "time": "246",
        "text": "Adding a Split Edit"
      }
    ]
  },
  {
    "id": "24",
    "title": "25. Enhancing the Soundtrack",
    "duration": "8:55",
    "trial": "0",
    "markers": [
      {
        "time": "26",
        "text": "Analyzing Audio for Problems"
      },
      {
        "time": "136",
        "text": "Improving Loudness"
      },
      {
        "time": "183",
        "text": "Reducing Background Noise"
      },
      {
        "time": "360",
        "text": "Evening Out Dialogue"
      }
    ]
  },
  {
    "id": "25",
    "title": "26. Retiming Effects",
    "duration": "11:12",
    "trial": "0",
    "markers": [
      {
        "time": "35",
        "text": "Retiming - Constant Speed Effects"
      },
      {
        "time": "211",
        "text": "Using the Custom Speed Window"
      },
      {
        "time": "274",
        "text": "Using the Retiming Handle"
      },
      {
        "time": "309",
        "text": "Reversing a Clip"
      },
      {
        "time": "345",
        "text": "Retiming - Variable Speed Effects"
      },
      {
        "time": "428",
        "text": "Smoothing Speed Transitions"
      },
      {
        "time": "478",
        "text": "Changing the Video Quality"
      },
      {
        "time": "520",
        "text": "Analyzing & Rendering with Optical Flow"
      }
    ]
  },
  {
    "id": "26",
    "title": "27. Creating Freezes & Holds",
    "duration": "5:15",
    "trial": "0",
    "markers": [
      {
        "time": "165",
        "text": "Creating a Freeze Frame in the Browser"
      },
      {
        "time": "232",
        "text": "Creating Hold Frames"
      }
    ]
  },
  {
    "id": "27",
    "title": "28. Applying Modifying Transitions",
    "duration": "10:37",
    "trial": "0",
    "markers": [
      {
        "time": "23",
        "text": "Controlling Transition Overlap"
      },
      {
        "time": "115",
        "text": "Applying the Default Transition"
      },
      {
        "time": "306",
        "text": "Changing Transition Duration"
      },
      {
        "time": "366",
        "text": "Rolling an Edit Under a Transition"
      },
      {
        "time": "389",
        "text": "Applying a Transition from the Media Browser"
      },
      {
        "time": "455",
        "text": "Adjusting the Transition Properties"
      },
      {
        "time": "528",
        "text": "Replacing a Transition"
      },
      {
        "time": "574",
        "text": "Applying Multiple Transitions"
      },
      {
        "time": "605",
        "text": "Changing the Default Transition"
      }
    ]
  },
  {
    "id": "28",
    "title": "29. Applying & Animating Effects",
    "duration": "5:19",
    "trial": "0",
    "markers": [
      {
        "time": "23",
        "text": "Previewing & Applying Effects"
      },
      {
        "time": "92",
        "text": "Adjusting Effect Properties"
      },
      {
        "time": "154",
        "text": "Removing Clip Attributes"
      },
      {
        "time": "178",
        "text": "Using the Animation Editor"
      },
      {
        "time": "241",
        "text": "Keyframing Effects"
      }
    ]
  },
  {
    "id": "29",
    "title": "30. Working with Generators & Photos",
    "duration": "6:41",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Reasons to Transform Images"
      },
      {
        "time": "121",
        "text": "Using Apple's Motion as a Publishing Tool"
      },
      {
        "time": "181",
        "text": "Changing the Parameters"
      },
      {
        "time": "193",
        "text": "Adding Photos to a Project"
      },
      {
        "time": "281",
        "text": "Changing the Spatial Conform"
      }
    ]
  },
  {
    "id": "30",
    "title": "31. Working with Transform Controls",
    "duration": "7:26",
    "trial": "0",
    "markers": [
      {
        "time": "59",
        "text": "Transforming Images in the Viewer"
      },
      {
        "time": "103",
        "text": "Transforming Images in the Inspector"
      },
      {
        "time": "155",
        "text": "Animating Transforms with Keyframes"
      },
      {
        "time": "284",
        "text": "Navigating to Keyframes"
      },
      {
        "time": "309",
        "text": "Working with Keyframes in the Animation Editor"
      },
      {
        "time": "397",
        "text": "Animating Opacity"
      }
    ]
  },
  {
    "id": "31",
    "title": "32. Trimming, Cropping & Distorting an Image",
    "duration": "4:24",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Trimming an Image"
      },
      {
        "time": "60",
        "text": "Cropping an Image"
      },
      {
        "time": "109",
        "text": "Creating a Ken Burns Effect"
      },
      {
        "time": "214",
        "text": "Distorting an Image"
      }
    ]
  },
  {
    "id": "32",
    "title": "33. Working with 2D & 3D Titles",
    "duration": "13:11",
    "trial": "0",
    "markers": [
      {
        "time": "130",
        "text": "Working with Basic Titles & Lower Thirds"
      },
      {
        "time": "208",
        "text": "Editing Titles in the Viewer"
      },
      {
        "time": "246",
        "text": "Changing Text Attributes in the Inspector"
      },
      {
        "time": "346",
        "text": "Browsing for Title Themes"
      },
      {
        "time": "385",
        "text": "Replacing & Editing a Title"
      },
      {
        "time": "464",
        "text": "Working with 3D Titles"
      },
      {
        "time": "483",
        "text": "Adding a 3D Animation Preset"
      },
      {
        "time": "540",
        "text": "Changing Text Position & Rotation"
      },
      {
        "time": "574",
        "text": "Adding a Material"
      },
      {
        "time": "641",
        "text": "Changing the Lighting"
      },
      {
        "time": "695",
        "text": "Saving a Style Preset"
      },
      {
        "time": "716",
        "text": "Altering the Animation Parameters"
      }
    ]
  },
  {
    "id": "33",
    "title": "34. Working with Compound Clips",
    "duration": "5:31",
    "trial": "0",
    "markers": [
      {
        "time": "58",
        "text": "Enabling Safe Zones"
      },
      {
        "time": "126",
        "text": "Creating a Compound Clip"
      },
      {
        "time": "175",
        "text": "Editing a Compound Clip"
      },
      {
        "time": "200",
        "text": "Adding a Drop Shadow"
      },
      {
        "time": "288",
        "text": "Locating a Compound Clip"
      }
    ]
  },
  {
    "id": "34",
    "title": "35. Balancing & Matching Color",
    "duration": "6:31",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Reasons for Color Correction"
      },
      {
        "time": "62",
        "text": "Auto Balancing ColorÂ & Contrast"
      },
      {
        "time": "142",
        "text": "Manually White Balancing"
      },
      {
        "time": "286",
        "text": "Shot Matching"
      }
    ]
  },
  {
    "id": "35",
    "title": "36. Manually Color Correcting Video",
    "duration": "11:24",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Primary vs. Secondary Color Correction"
      },
      {
        "time": "74",
        "text": "Stacking Corrections"
      },
      {
        "time": "178",
        "text": "Adjusting Exposure"
      },
      {
        "time": "239",
        "text": "Adjusting Contrast"
      },
      {
        "time": "428",
        "text": "Adjusting Saturation"
      },
      {
        "time": "499",
        "text": "Adjusting Color"
      }
    ]
  },
  {
    "id": "36",
    "title": "37. Using Color & Shape Masks",
    "duration": "6:32",
    "trial": "0",
    "markers": [
      {
        "time": "6",
        "text": "Performing Targeted Corrections"
      },
      {
        "time": "36",
        "text": "Giving the Sky More Punch"
      },
      {
        "time": "114",
        "text": "Adding Pixels to the Matte"
      },
      {
        "time": "127",
        "text": "Viewing the Matte"
      },
      {
        "time": "171",
        "text": "Correcting Inside\/Outside the Matte"
      },
      {
        "time": "213",
        "text": "Targeting Specific Areas Using a Shape Mask"
      },
      {
        "time": "330",
        "text": "Adding Multiple Shape Masks"
      },
      {
        "time": "358",
        "text": "Copying and Pasting Corrections"
      }
    ]
  },
  {
    "id": "37",
    "title": "38. Editing 360 Videos",
    "duration": "3:55",
    "trial": "0",
    "markers": [
      {
        "time": "45",
        "text": "Opening the 360 Viewer"
      },
      {
        "time": "73",
        "text": "Setting Your 360 Video Metadata Correctly"
      },
      {
        "time": "87",
        "text": "Creating a 360 Project"
      },
      {
        "time": "133",
        "text": "Reorienting 360 Videos"
      },
      {
        "time": "185",
        "text": "Adding Titles to a 360 Project"
      }
    ]
  },
  {
    "id": "38",
    "title": "39. Sharing Your Movie",
    "duration": "10:08",
    "trial": "0",
    "markers": [
      {
        "time": "32",
        "text": "Sharing a Project"
      },
      {
        "time": "104",
        "text": "Creating Bundles"
      },
      {
        "time": "207",
        "text": "Exporting for Apple Devices"
      },
      {
        "time": "305",
        "text": "Changing Export Settings"
      },
      {
        "time": "436",
        "text": "Sharing to iTunes"
      },
      {
        "time": "489",
        "text": "Creating & Exporting Chapter Markers"
      }
    ]
  }
]
