let topics = new Array;

topics = [
  {
    id: 0,
    name: "Material Science",
    description: "A subset of chemistry that deals with selecting and processing materials for a given engineering application",
    parents: [
      {
        name: "Chemistry"
      }
    ],
    subs: [
      {
        name: "Atomic Structure",
        subs: [
          {
            name: "Crystaline Structures"
          },
          {
            name: "Amorphous Structures"
          }
        ]
      },
      {
        name: "Material Properties"
      },
      {
        name: "Material Processing"
      },
      {
        name: "Semiconductor Processing"
      }
    ],
    discussion: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Vitae auctor eu augue ut lectus arcu bibendum at varius. Nec dui nunc mattis enim ut tellus elementum sagittis. Feugiat in ante metus dictum at tempor commodo ullamcorper. Tellus pellentesque eu tincidunt tortor aliquam. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Tincidunt dui ut ornare lectus sit amet est placerat. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Eget egestas purus viverra accumsan. Etiam sit amet nisl purus in mollis nunc sed. Malesuada fames ac turpis egestas. Elit ut aliquam purus sit amet luctus venenatis lectus.",
      "Amet nisl suscipit adipiscing bibendum est ultricies. Tincidunt id aliquet risus feugiat in ante metus dictum at. Duis tristique sollicitudin nibh sit amet commodo nulla. Dignissim cras tincidunt lobortis feugiat. Ut lectus arcu bibendum at varius. Commodo sed egestas egestas fringilla phasellus faucibus. Sem integer vitae justo eget magna fermentum. Eu scelerisque felis imperdiet proin fermentum leo. Sit amet luctus venenatis lectus. Vitae congue eu consequat ac felis donec et odio pellentesque.",
      "Lorem ipsum dolor sit amet consectetur adipiscing. Purus semper eget duis at tellus at urna. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Amet facilisis magna etiam tempor. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Ornare suspendisse sed nisi lacus sed viverra. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Sociis natoque penatibus et magnis dis. Nisl purus in mollis nunc sed id. Penatibus et magnis dis parturient montes nascetur. Pharetra pharetra massa massa ultricies mi quis. Arcu vitae elementum curabitur vitae nunc. Congue quisque egestas diam in arcu cursus euismod. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Consectetur adipiscing elit duis tristique. Donec et odio pellentesque diam volutpat commodo sed. Enim tortor at auctor urna nunc id cursus metus. Eu mi bibendum neque egestas congue quisque egestas diam in. Venenatis urna cursus eget nunc.",
      "Odio ut sem nulla pharetra diam sit. Orci ac auctor augue mauris augue neque gravida. Vel turpis nunc eget lorem dolor. Suspendisse ultrices gravida dictum fusce ut placerat orci. Adipiscing enim eu turpis egestas pretium. Nunc aliquet",
      "bibendum enim facilisis gravida neque convallis a. Ullamcorper morbi tincidunt ornare massa. Vitae et leo duis ut diam quam nulla porttitor massa. Tristique senectus et netus et. Rhoncus urna neque viverra justo nec ultrices dui sapien eget.",
      "Mauris augue neque gravida in fermentum et sollicitudin ac. Dictum fusce ut placerat orci nulla pellentesque. Feugiat in fermentum posuere urna nec tincidunt. Aliquam eleifend mi in nulla posuere sollicitudin. A erat nam at lectus urna duis convallis convallis tellus. Mauris a diam maecenas sed enim.",
      "Sagittis id consectetur purus ut faucibus pulvinar. Sed egestas egestas fringilla phasellus faucibus scelerisque. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Nibh sed pulvinar proin gravida hendrerit. Quam vulputate dignissim suspendisse in. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Pharetra magna ac placerat vestibulum lectus. Vitae congue mauris rhoncus aenean. Ornare arcu odio ut sem nulla pharetra."
    ]
  },
  {
    id: 1,
    name: "Semiconductor Processing",
    description: "The study of the materials and processes involved in creating Semiconductor devices used in common electronic devices",
    parents: [
      {
        name:"Material Science"
      }
    ],
    subs: [
      {
        name: "Photolithography",
      },
      {
        name: "Etching",
      },
      {
        name: "Oxide Growth",
        subs: [
          {
            name: "Wet conditions"
          },
          {
            name: "Dry conditions"
          }
        ]
      },
      {
        name:"CVD+PVD",
      }
    ],
    discussion: [
      "Add Later"
    ]
  },
];

export default topics
